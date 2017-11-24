<template>
<div>
  <header>
    <h3>어떤 관계에서의 대화인지 선택해주세요.<br>
  더 좋은 답변을 드리는 데 도움이 됩니다.</h3>
  </header>
  <div>
    <b-button @click="onClick('연애')">연애</b-button>
    <b-button class="ui button" @click="onClick('직장')">직장</b-button>
    <b-button class="ui button" @click="onClick('친구')">친구</b-button>
    <b-button class="ui button" @click="onClick('가족')">가족</b-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'categorize',
  methods: {
    onClick: function(category) {
      this.$store.commit('setCategory', category)
      this.$router.push({
        name: 'writeQuestion'
      })
    }
  }
}
</script>

<style lang="css">

</style>
