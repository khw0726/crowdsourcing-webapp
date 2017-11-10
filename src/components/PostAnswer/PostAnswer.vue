<template>
  <div>
  	<div id="answerimg">
  		<img src="/static/answer.jpg"/>
  	</div>
  	<div><span>상대방이 화가 났나요?</span></div>
  	<div class="ui buttons">
      <button class="ui button" v-bind:class="{ active: yActive}" value="y" @click="onYActive">네</button>
      <button class="ui button" v-bind:class="{ active: nActive}" value="n" @click="onNActive">아니요</button>
     </div>
    
    <div class="ui fluid action input">
      <input placeholder="다른 의견이 있다면 말해주세요."/>
    </div>
    <div>
    	<button class="ui button" @click="$router.push('answerComplete')">완료</button>
    </div>
  </div>
</template>

<script>
  export default {
  	name: 'postAnswer',
  	data: function (){
  	return {
  		yActive: false,
  		nActive: false
  	}
  	},
  	methods: {
      onYActive: function () {
      this.yActive=true;
      this.nActive=false;
      },
      onNActive: function () {
      this.nActive=true;
      this.yActive=false;
      }
     }
    }
</script>

<style scoped>
	#answerimg {
	width: 80%;
	margin: auto;
	}
  #answerimg img{
  	max-width:100%;
  }
</style>