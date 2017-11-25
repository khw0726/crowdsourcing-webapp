<template>
  <div>
    <h3>답변을 기다리는 질문</h3>
    <question v-for="q in questions" :key="q['.key']" :question="q"></question>
  </div>
</template>

<script>
import fb from "@/fb.js"
import question from "@/components/Question.vue"
export default{
  components: {
    question
  },
  firebase: {
    questions: fb.db.ref('questions')
  }
}
</script>

<style scoped>
h3 {
  margin-top: 1em
}
</style>
