<template>
  <div>
  	<div id="answerimg">
  		<img :src="img">
  	</div><br>
  	<div><span>상대방이 화가 났나요?</span></div>
  	<div>
    <b-button-group>
      <b-btn>네</b-btn>
      <b-btn>아니오</b-btn>
    </b-button-group>
     </div>
     <br>
     <b-form-input v-model="answer"
                   type="text"
                   placeholder="다른 의견이 있다면 말씀해주세요"></b-form-input>
    <div>
    	 <b-button >완료</b-button>
    </div>
  </div>
</template>

<script>
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
    questions: fb.db.ref('questions'),
    answers: fb.db.ref('answers')
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
    },
    onSubmit: function () {
      const answerObj = {
        isYes: this.yActive,
        answer: this.answer,
        name: this.$store.state.answererInfo.name,
        questionID: this.imgID
      }
      this.$firebaseRefs.answers.push(answerObj)
      this.$router.push('answerComplete')
    }
  }
};
</script>

<style scoped>
#answerimg {
  width: 80%;
  margin: auto;
}
#answerimg img {
  max-width: 100%;
}
</style>
