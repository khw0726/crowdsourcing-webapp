<template>
  <div>
    <h5>무엇을 물어보고 싶은 지 적어주세요.</h5>
    <b-form-input v-model="question" type="text" placeholder="질문을 적어주세요."></b-form-input>
    <br>
<<<<<<< HEAD
    <b-button @click="onClick">다음</b-button>
=======
    <b-button @click="onClick()">다음</b-button>
>>>>>>> 59fdfbf3e33ca1bd2d853a7be125cbb2142d9d4c
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
        name: 'annotate'
      })
    }
  }
}
</script>

<style lang="css">

</style>
