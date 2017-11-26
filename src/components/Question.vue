<template>
  <div>
    <b-card bg-variant="white" text-variant="#416e79">
      <h4 class="title"><router-link :to="{name: 'postAnswer', params: { imgID: question['.key'] }}">{{question.question}}</router-link></h4>
      <h6 class="sub-title">{{question.category}}</h6>
    </b-card>
  </div>


</template>

<script>
export default {
  name: 'question',
  props: ['question']

}
</script>

<style>
 .card-body {
   padding: 1.0rem;
 }

</style>
