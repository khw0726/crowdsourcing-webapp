<template>
<div>
  <div id="answerimg">
    <img :src="question.imgEdited">
  </div><br>
  <div><span>{{question.question}}</span></div>
  <div>
    <b-button-group>
      <b-button :pressed.sync="yActive" @click="onYActive" variant="primary">네</b-button>
      <b-button :pressed.sync="nActive" @click="onNActive" variant="primary">아니오</b-button>
    </b-button-group>
  </div>
     <br>
     <b-form-input v-model="answer"
                   type="text"
                   placeholder="추가로 하실 말씀이 있다면 적어주세요."></b-form-input>
    <br>
    <div>
       <b-button @click="onSubmit()">완료</b-button>
    </div>
</div>
</template>

<script>
import fb from "@/fb.js";

export default {
  name: "postAnswer",
  props: ['imgID'],
  data: function() {
    return {
      Toggle1: false,
      Toggle2: false,
      yActive: false,
      nActive: false,
      answer: ''
    };
  },
  firebase: {
    questions: fb.db.ref('questions'),
    answers: fb.db.ref('answers'),
    users: fb.db.ref('users')
  },
  computed: {
    question: function() {
      if (this.questions.length === 0) {
        return "";
      }
      let question = this.questions.find(question => {
        console.log(question['.key'])
        return question['.key'] === this.imgID;
      });
      console.log(this.imgID)
      console.log(question)
      return question;
    }
  },
  mounted() {
    console.log(document.cookie)
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1")
    if ((!this.$store.state.answererInfo.name)&&(!cookieValue)){
      alert("Please Log-in")
      console.log("dddd");
      this.$router.push({path:'/Login'});
    }
    else if (!this.$store.state.answererInfo.name){
      this.name = cookieValue;
      this.$root.$firebaseRefs.users.once('value').then(snapshot => {
          const users = snapshot.val()
          console.log(users)
          for (let user in users) {
            console.log(user)
            if (users[user].name === this.name) {
              this.$store.commit('setAnswererInfo', users[user])
            }
          }
        })
    }
  },

  methods: {
    onYActive: function() {
      this.yActive = true;
      this.nActive = false;
    },
    onNActive: function() {
      this.nActive = true;
      this.yActive = false;
    },
    onSubmit: function() {
      var date = new Date().toISOString().slice(0,10); 

      const answerObj = {
        isYes: this.Toggle1,
        answer: this.answer,
        name: this.$store.state.answererInfo.name,
        questionID: this.imgID,
        date: date,
        category : this.question.category
      }
      console.log(date)
      this.$firebaseRefs.answers.push(answerObj)
      var newAnswer = [answerObj.isYes]
      this.$firebaseRefs.questions.child(this.imgID).on('value', function(snapshot) {
        if (snapshot.val().answers != 0){
          newAnswer = newAnswer.concat(snapshot.val().answers)
        }
      });
      let userInfo = this.users.find(function(user) {
        return user.name === answerObj.name
      })
      console.log(userInfo)
      var userUpdates
      if (userInfo.questions) {
        userInfo.questions.push(this.imgID)
        userUpdates = {questions : userInfo.questions}
      }
      else{
        userUpdates = {questions : [this.imgID]}

      }
      var updates = {}
      updates[this.imgID+"/answers"] = newAnswer
      this.$root.$firebaseRefs.questions.update(updates)
      
      //console.log(this.users['-KzrBieCBvao_qb8XhGe'].questions)
      this.$firebaseRefs.users.child(userInfo[".key"]).update(userUpdates)
      this.$router.push({path:'/answerComplete'})
    }
  }
};
</script>

<style scoped>
#answerimg {
  width: 80%;
  margin: auto;
}

#answerimg img {
  max-width: 100%;
}
</style>
