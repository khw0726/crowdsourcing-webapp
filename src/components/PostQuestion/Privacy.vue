<template>
<div>
  <h5>대화 내용 중 이름이나 연락처, 민감한 개인 정보를 손가락으로 칠해주세요.</h5>
  <div>
    <b-form-checkbox id="privacy" v-model="isConfirmed" value="accepted" unchecked-value="not_accepted">
      민감한 개인 정보가 없는지 확인하셨나요?
    </b-form-checkbox>
  </div>
  <br>
  <b-alert variant="warning" :show="showAlert">민감한 개인 정보가 없는지 확인해주세요.</b-alert>
  <b-button variant="danger" @click="$emit('refreshCanvas')">
    <i class="fa fa-undo" aria-hidden="true"></i>
  </b-button>
  <!-- <b-button @click="isConfirmed = true" v-if="!isConfirmed">확인</b-button> -->
  <b-button @click="onClick()">다음</b-button>
</div>
</template>

<script>
export default {
  name: 'privacy',
  methods: {
    onClick: function() {
      if(this.isConfirmed === 'accepted') {
        this.$emit('postFinished')
        this.$router.push('postFinished')
      }
      else {
        this.showAlert = true
      }
    }
  },
  data: function () {
    return {
      isConfirmed: false,
      showAlert: false
    }
  }
}
</script>

<style lang="css">

</style>
