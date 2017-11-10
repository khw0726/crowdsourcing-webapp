<template>
  <div>
  	<div id="answerimg">
  		<img src="/static/answer.jpg"/>
  	</div>
  	<div><span>상대방이 화가 났나요?</span></div>
  	<div class="ui buttons">
      <button class="ui button" value="y">네</button>
      <button class="ui button" value="n">아니요</button>
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