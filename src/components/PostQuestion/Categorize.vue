<template>
  <div>
    <h3 class="ui header">어떤 관계에서의 대화인지 선택해주세요. 더 좋은 답변을 드리는 데 도움이 됩니다.</h3>
    <div class="ui buttons">
      <button class="ui button" @click="onClick('연애')">연애</button>
      <button class="ui button" @click="onClick('직장생활')">직장생활</button>
      <button class="ui button" @click="onClick('친구관계')">친구관계</button>
      <button class="ui button" @click="onClick('기타')">기타</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'categorize',
    methods: {
      onClick: function (category) {
        this.$store.commit('setCategory', category)
        this.$router.push({name: 'writeQuestion'})
      }
    }
  }
</script>

<style lang="css">
  
</style>