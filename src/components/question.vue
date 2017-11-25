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
   margin: 10px 10px 10px 10px;
 }
</style>
