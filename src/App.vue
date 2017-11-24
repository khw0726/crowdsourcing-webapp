<template>
  <div id="app">
    <b-navbar type="dark" variant="info">
      <b-navbar-nav>
        <b-nav-item @click="$router.go(-1)"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <!-- <img src="./assets/logo.png"> -->
    <b-container fluid>
    <router-view/>
    </b-container>
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
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.5;
  flex-direction: column;
  min-height: 100vh;
  color: #2c3e50;
  /*background-color: #e4e5e6;*/
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
  .navbar {
    padding: 0.1rem 1rem;
  }
</style>
