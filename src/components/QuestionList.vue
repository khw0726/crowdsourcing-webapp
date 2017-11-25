<template>
<div>
  <h3>답변을 기다리는 질문</h3>
  <br>
  <ul>
<li v-for="question in questions"><a @click="$router.push(question['.key'] + '/postQuestion')">
{{question.question}}</a></li>
</ul>
</div>
</template>

<script>
import fb from "@/fb.js"
export default{
//firebase {
//  questions: fb.db.ref('questions')
//}

}
</script>

<style scoped>

</style>
