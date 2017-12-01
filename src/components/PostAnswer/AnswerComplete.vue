<template>
	<div>
  <div class="margin">
    <span>답변이 완료되었습니다.</span>

  </div>
  <div>
    <b-button :to="{name:'dashboard'}">나의 현황 보기</b-button>
    <b-button :to="{name:'questionList'}">다른 질문 보기기</b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "answerComplete"
}
</script>
<style scoped>
.margin {
	margin: 100px 0px 30px 0px;  
}
</style>
