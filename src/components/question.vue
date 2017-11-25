<template>
  <div>
    <b-card :title="question"
            :sub-title="category"
            bg-variant="white"
            text-variant="#416e79">
  </b-card>
  </div>


</template>

<script>
export default {
  name: "question",
  props: ['question','category']

}
</script>

<style>
 .card-body {
   padding: 1.0rem;
 }

</style>
