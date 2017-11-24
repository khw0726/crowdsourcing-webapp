<template>
<div>
  <h3 id="registration">회원가입</h3>
  <b-form @submit="onSubmit">
    <b-form-group id="exampleInputGroup1" label="아이디:" label-for="exampleInput1" description="아이디는 본인 식별 용도로만 사용됩니다.">
      <b-form-input id="exampleInput1" type="email" v-model="form.email" required placeholder="네 자 이상의 아이디를 입력해주세요"></b-form-input>
    </b-form-group>
    <b-input-group-button slot="right">
      <b-btn variant="info">중복확인</b-btn>
    </b-input-group-button>
    <h6 class="mt-2">관심 카테고리:</h6>
    <b-form-checkbox-group id="checkboxes1" name="interest" v-model="selected">
      <b-form-checkbox value="love">연애</b-form-checkbox>
      <b-form-checkbox value="friend">친구</b-form-checkbox>
      <b-form-checkbox value="boss">상사</b-form-checkbox>
      <b-form-checkbox value="family">가족</b-form-checkbox>
      <b-form-checkbox value="business">업무관계</b-form-checkbox><br>
      <h6>관심 카테고리의 질문에 대한 푸시알림을 받으시겠습니까?</h6>
    </b-form-checkbox-group>
    <b-button variant="success">네</b-button>
    <b-button disabled variant="success">아니요</b-button><br><br>
    <h6 class="mt-3">성별:</h6>
    <b-form-checkbox-group id="checkboxes2" name="gender" v-model="selected">
      <b-form-checkbox value="man">남</b-form-checkbox>
      <b-form-checkbox value="woman">여</b-form-checkbox>
      <b-form-checkbox value="etc">기타</b-form-checkbox>
    </b-form-checkbox-group>
    <b-form-group id="exampleInputGroup3" label="연령:" label-for="exampleInput3">
      <b-form-select id="exampleInput3" :options="age" required v-model="form.food"></b-form-select>
    </b-form-group>
    <b-button type="submit" variant="primary">제출</b-button>
    <b-button type="reset" variant="secondary">되돌리기</b-button>
  </b-form>
</div>
</template>
<script>
export default {
  data() {
    return {
      form: {

        email: '',
        name: '',
        food: null,
        checked: false,
        secret: 'S3CR3T'
      },
      age: [{
          text: 'Select One',
          value: null
        },
        '10대', '20대', '30대', '40대', '50대 이상'
      ],
      selected: [],
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>
<style scoped>

</style>
