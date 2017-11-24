<template>
  <div>
    <h3 id="registration">로그인</h3>
    <b-form @submit="onSubmit">
      <b-form-group id="exampleInputGroup1" label="아이디:" label-for="exampleInput1">
        <b-form-input id="exampleInput1" type="email" v-model="form.email" required placeholder="아이디를 입력해주세요"></b-form-input>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>


