<template>
  <div>
    <h5>무엇을 물어보고 싶은 지 적어주세요.</h5>
    <b-form-input v-model="question" type="text" placeholder="질문을 적어주세요."></b-form-input>
    <br>
    <b-button :to="{name:'annotate'}">다음</b-button>
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
      this.$store.commit('setQuestion', this.question)
      this.$router.push({
        name: 'annotate'
      })
    }
  }
}
</script>

<style lang="css">

</style>
