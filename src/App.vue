<template>
  <div id="app">
    <div class="ui top inverted fixed menu">
      <div class="item" @click="$router.go(-1)">
        <i class="left arrow icon"/>
      </div>
    </div>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Noto Sans CJK KR', '나눔바른고딕', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
