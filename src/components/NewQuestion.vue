<template>
  <div>
    <b-card bg-variant="white" text-variant="#416e79">
      <h4 class="title"><router-link :to="{name: 'newAnswerView', params: { imgID: question['.key'] }}">{{question.question}}</router-link></h4>
      <h6 class="sub-title">{{categoryKey[question.category]}}</h6>
    </b-card>
  </div>


</template>

<script>
export default {
  name: 'newQuestion',
  props: ['question'],
  computed: {
    categoryKey: function () {
      return {
        'friend': '친구',
        'business': '직장',
        'love': '연애',
        'family': '가족',
        'etc': '그 외'
      }
    }
  }

}
</script>

<style>
 .card-body {
   padding: 1.0rem;
 }

</style>
