<template>
<div>
  <h3>답변을 기다리는 질문</h3>
  <br>

  <v-list two-line>
<template v-for="question in questions">
<v-list-tile v-else v-bind:key="question.questions" @click="$router.push(question['.key'] + '/postQuestion')">
<v-list-tile-content>
  <v-list-tile-title v-html="questions.question"></v-list-tile-title>
  <v-list-tile-sub-title v-html="seeQuestions.category"></v-list-tile-sub-title>
</v-list-tile-content></v-list-tile>
</template>
</v-list>
</div>
</template>

<script>
import fb from "@/fb.js"
export default{

firebase: {
  questions: fb.db.ref('questions')
}
}
</script>

<style scoped>

</style>
