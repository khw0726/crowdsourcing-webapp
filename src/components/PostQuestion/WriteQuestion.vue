<template>
  <div>
    <h5>위 대화 내용에 관해 무엇이 궁금하신가요?</h5>
    <h6>예/아니오로 대답할 수 있는 질문을 적어주세요.</h6>
    <b-form-input v-model="question" type="text" placeholder="질문을 적어주세요."></b-form-input>
    <br>
    <b-button @click="onClick">다음</b-button>
  </div>
</template>

<script>
export default {
  name: 'writeQuestion',
  data: function() {
    return {
      question: ''
    }
  },
  methods: {
    onClick: function() {
      console.log(this.question)
      this.$store.commit('setQuestion', this.question)
      this.$router.push({
        name: 'privacy'
      })
    }
  }
}
</script>

<style lang="css">

</style>
