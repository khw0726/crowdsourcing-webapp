<template>
<div><br>
  <h3>답변을 기다리는 질문</h3>
  <question v-for="q in questions" :question="q.question" :category="q.category"></question>


</div>
</template>

<script>
import fb from "@/fb.js"
import question from "@/components/question.vue"
export default{
  components: {question},
firebase: {
  questions: fb.db.ref('questions')
}
}
</script>

<style scoped>

</style>
