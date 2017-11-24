<template>
<div>
  <div id="answerimg">
    <img src="/static/answer.jpg" />
  </div><br>
  <div><span>상대방이 화가 났나요?</span></div>
  <div>
<<<<<<< HEAD
  	<div id="answerimg">
  		<img :src="img">
  	</div><br>
  	<div><span>상대방이 화가 났나요?</span></div>
  	<div>
=======
>>>>>>> 59983a3a7b40bfc24b2e26a6446101d24eb439a5
    <b-button-group>
      <b-btn>네</b-btn>
      <b-btn>아니오</b-btn>
    </b-button-group>
<<<<<<< HEAD
     </div>
     <br>
     <b-form-input v-model="answer"
                   type="text"
                   placeholder="다른 의견이 있다면 말씀해주세요"></b-form-input>
    <div>
    	 <b-button :to="'answerComplete'">완료</b-button>
    </div>
=======
>>>>>>> 59983a3a7b40bfc24b2e26a6446101d24eb439a5
  </div>
  <br>
  <b-form-input v-model="text1" type="text" placeholder="다른 의견이 있다면 말씀해주세요"></b-form-input>
  <div>
    <b-button href="/#/answerComplete">완료</b-button>
  </div>
</div>
</template>

<script>
<<<<<<< HEAD
import fb from "@/fb.js";
export default {
  name: "postAnswer",
  props: ['imgID'],
  data: function() {
    return {
      yActive: false,
      nActive: false,
      answer: ''
    };
  },
  firebase: {
    questions: fb.db.ref('questions')
  },
  computed: {
    img: function() {
      if (this.questions.length === 0) {
        return "";
      }
      let img = this.questions.find(question => {
        console.log(question['.key'])
        return question['.key'] === this.imgID;
      });
      console.log(this.imgID)
      console.log(img)
      return img.img;
    }
  },
  methods: {
    onYActive: function() {
      this.yActive = true;
      this.nActive = false;
    },
    onNActive: function() {
      this.nActive = true;
      this.yActive = false;
    }
  }
};
=======
export default {
  name: 'postAnswer',
  data: function() {
    return {
      yActive: false,
      nActive: false
    }
  },
  methods: {
    onYActive: function() {
      this.yActive = true;
      this.nActive = false;
    },
    onNActive: function() {
      this.nActive = true;
      this.yActive = false;
    }
  }
}
>>>>>>> 59983a3a7b40bfc24b2e26a6446101d24eb439a5
</script>

<style scoped>
#answerimg {
  width: 50%;
  margin: auto;
}
<<<<<<< HEAD
=======

>>>>>>> 59983a3a7b40bfc24b2e26a6446101d24eb439a5
#answerimg img {
  max-width: 60%;
}
</style>
