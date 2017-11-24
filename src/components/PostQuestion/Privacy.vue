<template>
<div>
  <header>
    <h5>만약 대화 내용중 이름이나 연락처, 민감한 개인 정보가 있다면 가려주세요.</h5>
  </header>
  <div>

    <b-form-checkbox id="privacy" value="accepted" unchecked-value="not_accepted">
      민감한 개인 정보가 없는지 확인하셨나요?
    </b-form-checkbox>

  </div>
  <br>
  <button style="font-size:24px"><i class="fa fa-undo"></i></button>
  <button class="ui basic red icon button" @click="$emit('refreshCanvas')">
      <i class="undo icon"></i>
    </button>
  <b-button href="/#/postQuestion/postFinished">다음</b-button>
</div>
</template>

<script>
export default {
  name: 'privacy',
  methods: {
    onClick: function() {
      this.$emit('postFinished')
      this.$router.push('postFinished')
    }
  }
}
</script>

<style lang="css">

</style>
