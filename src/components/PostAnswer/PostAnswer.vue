<template>
  <div>
  	<div id="answerimg">
  		<img src="/static/answer.jpg"/>
  	</div><br>
  	<div><span>상대방이 화가 났나요?</span></div>
  	<div>
    <b-button-group>
    <b-button>네</b-button>
    <b-button>아니오</b-button>
    </b-button-group>
     </div>
     <br>
     <b-form-input v-model="text1"
                   type="text"
                   placeholder="다른 의견이 있다면 말씀해주세요"></b-form-input>
    <div>
    	 <b-button href="/#/answerComplete">완료</b-button>
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
	width: 50%;
	margin: auto;
	}
  #answerimg img{
  	max-width:60%;
  }
</style>
