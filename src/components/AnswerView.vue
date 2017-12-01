<template>
  <div>
    <div id="answerimg">
      <img :src="imgSrc"/>
    </div>
    <br>
    <div id="text">
      <!-- <div id="question"> -->
        <h5>{{question}}</h5>
        <!-- </div> -->
      <br>
      남겨주신 이 질문에 대해
      <span id="proportion">{{proportion}}</span>의 사람들이
      <br>
      <span id="answer">그렇다</span>라고 대답했습니다.
    </div>
    <div>
      이 질문과 관련해 추가로 다음과 같은 의견을 남겼습니다.
      <ul>
        <li v-for="comment in comments" :key="comment.answer"><span :class="comment.isYes ?'yes':'no'">{{comment.isYes ? '그렇다' : '아니다'}}</span> - {{comment.answer}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import fb from '@/fb.js'
export default {
  name: 'answerView',
  props: ['imgID'],
  firebase: function () {
    return {
      answers: fb.db.ref('answers').orderByChild('questionID').equalTo(this.imgID), // answers specific to the question ID
      questions: fb.db.ref('questions').orderByKey().equalTo(this.imgID) // find specific question
    }
  },
  // DB-TODO: Show answers
  computed: {
    question: function () {
      if(this.questions) {
        const q = this.questions.find((q) => {
          return q['.key'] === this.imgID
        })
        if(q)
          return q.question
        else
          return ''
      } else {
        return ''
      }
    },
    proportion: function () {
      const totalAnswersCount = this.answers.length
      console.log(this.answers.length)
      const totalYesCount = this.answers.reduce(function(prevValue, curElement) {
        return prevValue + (curElement.isYes ? 1 : 0)
      }, 0)
      return Math.round(totalYesCount/totalAnswersCount * 100 || 0) + '%(' + totalAnswersCount + '명 중 ' + totalYesCount + ' 명)'
    },
    comments: function () {
      if(this.answers){
        return this.answers.map(function(a) {
          return {answer: a.answer, isYes: a.isYes}
        })
      } else {
        return []
      }
    },
    imgSrc: function () {
      if(this.questions.length === 0) {
        return null
      } else {
        return this.questions[0].img
      }
    }
  }
}
</script>

<style scoped>
#answerimg {
  width: 80%;
  margin: auto;
}

#answerimg img {
  max-width: 100%;
}

#text {
  line-height: 180%;
}
#question {
  /* font-weight: bold; */
  font-size: 1.5em;
}
#proportion {
  font-size: 1.5em;
  color: #d01919;
}

#answer {
  font-size: 1.5em;
  color: #16ab39;
}

.yes {
  color: #16ab39; 
}

.no {
  color: #d01919;
}
</style>
