<template>
  <div>
    <b-card :title="question"
            :sub-title="category">

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
