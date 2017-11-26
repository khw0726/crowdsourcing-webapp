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
  mounted() {
    this.$emit('questionsChecked')
  }
}
</script>

<style scoped>
h3 {
  margin-top: 1em
}
</style>
