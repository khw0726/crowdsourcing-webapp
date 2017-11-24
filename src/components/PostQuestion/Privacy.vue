<template>
  <div>
    <h5>만약 대화 내용중 이름이나 연락처, 민감한 개인 정보가 있다면 가려주세요.</h5>

    <h6>민감한 개인정보가 없는 지 확인 하셨나요?</h6>
    <!-- <div class="ui checkbox">
      <input name="privacy" type="checkbox">
      <label>민감한 개인 정보가 없는지 확인하셨나요?</label>
    </div>
    <br> -->
    <b-button variant="danger" @click="$emit('refreshCanvas')">
      <i class="fa fa-undo" aria-hidden="true"></i>
    </b-button>
    <b-button v-if="!confirmed" @click="confirmed=true">네, 확인했습니다.</b-button>
    <b-button v-if="confirmed" :to="{name: 'postFinished'}">다음</b-button>
  </div>
</template>

<script>
  export default {
    name: 'privacy',
    data: function () {
      return {
        confirmed: false
      }
    },
    methods: {
      onClick: function () {
        this.$emit('postFinished')
        this.$router.push('postFinished')
      }
    }
  }
</script>

<style lang="css">

</style>
