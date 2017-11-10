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
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.5;
  flex-direction: column;
  min-height: 100vh;
  color: #2c3e50;
  /*background-color: #e4e5e6;*/
  margin-top: 60px;
}
</style>
<style>
  /* Import Font Awesome Icons Set */
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/css/font-awesome.min.css';
  /* Import Simple Line Icons Set */
  $simple-line-font-path: '~simple-line-icons/fonts/';
  @import '~simple-line-icons/css/simple-line-icons.css';
  /* Import Bootstrap Vue Styles */
  @import '~bootstrap-vue/dist/bootstrap-vue.css';
</style>

<style lang="scss">
  // Import Main styles for this application
  @import './scss/style';
</style>
