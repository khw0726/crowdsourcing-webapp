<template>
  <div>
    <h3 class="ui header">무엇을 물어보고 싶은 지 적어주세요.</h3>
    <div class="ui fluid input">
      <input placeholder="질문" v-model="question">
    </div>
    <br>
    <button class="ui button" @click="onClick">다음
    </button>
  </div>
</template>

<script>
  export default {
    name: 'writeQuestion',
    data: function () {
      return {
        question: ''
      }
    },
    methods: {
      onClick: function () {
        this.$store.commit('setQuestion', this.question)
        this.$router.push({name: 'annotate'})
      }
    }
  }
</script>

<style lang="css">
  
</style>