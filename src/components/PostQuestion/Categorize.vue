<template>
  <div>
    <h5>어떤 관계에서의 대화인지 선택해주세요.<br>
    더 좋은 답변을 드리는 데 도움이 됩니다.</h5>
    <div>
      <b-button-group>
        <b-button class="ui button" @click="onClick('love')">연애</b-button>
        <b-button class="ui button" @click="onClick('friend')">친구</b-button>
        <b-button class="ui button" @click="onClick('business')">직장</b-button>
        <b-button class="ui button" @click="onClick('family')">가족</b-button>
        <b-button class="ui button" @click="onClick('etc')">그 외</b-button>
      </b-button-group>
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
        name: 'annotate'
      })
    }
  }
}
</script>

<style lang="css">

</style>
