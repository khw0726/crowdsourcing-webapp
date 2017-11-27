<template>
  <div>
    <h5 id="prompt">질문이 등록되었습니다. 답변은 <router-link to="{name: 'answerView', params: {imgID: imgID }}">여기</router-link>에서 확인해주세요. 카카오톡으로 보내드린 링크에서도 확인하실 수 있습니다.</h5>
  </div>
</template>
<script>
export default {
  name: 'postFinished',
  computed: {
    imgID: function () {
      return this.$route.params.imgID
    }
  }
}
</script>

<style scoped>
#prompt {
  vertical-align: middle;
}
</style>
