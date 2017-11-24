<template>
  <div>
    <h5>속뜻이 궁금한 말풍선에 동그라미를 쳐주세요.</h5>
    <b-button variant="danger" @click="$emit('refreshCanvas')">
      <i class="fa fa-undo" aria-hidden="true"></i>
    </b-button>
    <b-button :to="{name:'privacy'}">다음</b-button>
  </div>
</template>

<script>

</script>

<style lang="css">

</style>
