<template>
  <div class="ui container">
    <img :src="imgSrc">
    <div id="text">
      <div id="question">{{question}}</div>
      <br>
      이 질문에 대해 
      <span id="proportion">{{proportion}}</span>의 사람들이 
      <br>
      <span id="answer">그렇다</span>라고 대답했습니다. 
    </div>
    <div>
      기타 의견은 다음과 같습니다.
      <ul>
        <li v-for="comment in comments" :key="comment">{{comment}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'answerView',
  computed: {
    question: function () {
      return '상대방이 지금 저에게 화가 났나요?'
    },
    proportion: function () {
      return '72%'
    },
    comments: function () {
      return ['절교해야겠네요', '애매한데...', '괜찮은 것 같아요']
    },
    imgSrc: function () {
      return '/static/question.png'
    }
  }
}
</script>

<style scoped>
img {
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
</style>
