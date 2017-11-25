<template>
  <div>
  	<div id="answerimg">
  		<img :src="img">
  	</div><br>
  	<div><span>상대방이 화가 났나요?</span></div>
  	<div>
    <b-button-group>
      <b-btn @click="onYActive()">네</b-btn>
      <b-btn @click="onNActive()">아니오</b-btn>
    </b-button-group>
     </div>
     <br>
     <b-form-input v-model="answer"
                   type="text"
                   placeholder="다른 의견이 있다면 말씀해주세요"></b-form-input>
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
      yActive: false,
      nActive: false,
      answer: ''
    };
  },
  firebase: {
    questions: fb.db.ref('questions'),
    answers: fb.db.ref('answers')
  },
  computed: {
    img: function() {
      if (this.questions.length === 0) {
        return "";
      }
      let img = this.questions.find(question => {
        console.log(question['.key'])
        return question['.key'] === this.imgID;
      });
      console.log(this.imgID)
      console.log(img)
      return img.img;
    }
  },
  mounted() {
    console.log(document.cookie);
    if ((!this.$store.state.answererInfo.name)&(!document.cookie)){
      alert("Please Log-in")
      console.log("dddd");
      this.$router.push('Login');
    }
    else if (!this.$store.state.answererInfo.name){
      this.name = document.cookie.split('=')[1];
      this.$root.$firebaseRefs.users.once('value').then(snapshot => {
          const users = snapshot.val()
          console.log(users)
          for (let user in users) {
            console.log(user)
            if (users[user].name === this.name) {
              this.$store.commit('setAnswererInfo', users[user])
              this.$router.push('questionsList')
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
    onSubmit: function () {
      const answerObj = {
        isYes: this.yActive,
        answer: this.answer,
        name: this.$store.state.answererInfo.name,

      }
      
      this.$firebaseRefs.answers.child(this.imgID).set(answerObj)
      this.$router.push('answerComplete')
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
