<template>
  <div>
    <h3>답변을 기다리는 질문</h3>
    <question v-for="q in unansweredQuestions" :key="q['.key']" :question="q"></question>
  </div>
</template>

<script>
import fb from "@/fb.js"
import question from "@/components/Question.vue"
export default{
  components: {
    question
  },
  firebase() {
    return {
      questions: fb.db.ref('questions'),
      users: fb.db.ref('users').orderByChild('name').equalTo(this.$store.state.answererInfo.name)
    }
  },
  computed: {
    // user: function () {
    //   return this.users.find((u) => {
    //     return u.name === this.$store.state.answererInfo.name
    //   })
    // },
    // answeredQuestions: function () {
    //   if(this.users && this.users.length !== 0) {
    //     return this.users[0].questions
    //   } else {
    //     return []
    //   }
    // },
    unansweredQuestions: function () {
      if(this.questions && this.users && this.users.length !== 0 && this.questions.length !== 0){
        return this.questions.filter((q) => {
          return !(this.users[0].questions.includes(q['.key']))
        })
      } else {
        return []
      }
    }
  },
  created() {
    this.$emit('questionsChecked')
    console.log(document.cookie)
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1")
    if ((!this.$store.state.answererInfo.name)&(!cookieValue)){
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
            	console.log(this.name)
              this.$store.commit('setAnswererInfo', users[user])
            }
          }
        })
    }
  }
}
</script>

<style scoped>
h3 {
  margin-top: 1em
}
</style>
