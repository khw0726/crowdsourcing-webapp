<template>
  <div>
    <h5>위 대화에서, 속뜻이 궁금한 말풍선에 손가락으로 동그라미를 그려주세요.</h5>
    <b-button variant="danger" @click="$emit('refreshCanvas')">
      <i class="fa fa-undo" aria-hidden="true"></i>
    </b-button>
    <b-button :to="{name:'writeQuestion'}">다음</b-button>
  </div>
</template>

<script>

</script>

<style lang="css">

</style>
