<template>
  <div>
    <h3 class="ui header">속뜻이 궁금한 말풍선을 표시해주세요.</h3>
    <button class="ui basic red icon button" @click="$emit('refreshCanvas')">
      <i class="undo icon"></i>
    </button>
    <button class="ui button" @click="$router.push('privacy')">다음</button>
  </div>
</template>

<script>
  
</script>

<style lang="css">
  
</style>