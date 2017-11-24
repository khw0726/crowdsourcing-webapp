<template>
<div>
  <h3 id="registration">회원가입</h3>
  <b-form @submit="onSubmit">
    <b-form-group id="exampleInputGroup1" label="아이디:" label-for="exampleInput1" description="아이디는 본인 식별 용도로만 사용됩니다.">
      <b-form-input id="exampleInput1" type="text" :state="isValidName" v-model="form.name" required placeholder="네 자 이상의 아이디를 입력해주세요">
      </b-form-input>
    </b-form-group>
    <b-btn variant="info" @click="checkNameValidity">중복확인</b-btn>

    <br>관심 카테고리:
    <b-form-checkbox-group id="checkboxes1" label-for="checkboxes1" name="interest" v-model="form.selected">
      <b-form-checkbox value="love">연애</b-form-checkbox>
      <b-form-checkbox value="friend">친구</b-form-checkbox>
      <b-form-checkbox value="boss">상사</b-form-checkbox>
      <b-form-checkbox value="family">가족</b-form-checkbox>
      <b-form-checkbox value="business">업무관계</b-form-checkbox>
    </b-form-checkbox-group>
    <br>
    <b-form-checkbox v-model="form.pushSubscribed">관심 카테고리의 질문에 대한 알림을 받으시겠습니까?</b-form-checkbox>
    <!-- <b-button variant="success">네</b-button>
      <b-button disabled variant="success">아니요</b-button><br><br> -->
    <br>성별:
    <b-form-radio-group id="checkboxes2" name="gender" v-model="form.gender">
      <b-form-radio value="man">남</b-form-radio>
      <b-form-radio value="woman">여</b-form-radio>
      <b-form-radio value="etc">기타</b-form-radio>
    </b-form-radio-group>
    <b-form-group id="exampleInputGroup3" label="연령:" label-for="exampleInput3">
      <b-form-select id="exampleInput3" :options="age" required v-model="form.age"></b-form-select>
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
        name: '',
        age: null,
        gender: null,
        pushSubscribed: false,
        selected: []
      },
      age: [{
          text: 'Select One',
          value: null
        },
        '10대', '20대', '30대', '40대', '50대 이상'
      ],
      isValidName: null
    }
  },
  methods: {
    checkNameValidity: function() {
      this.$root.$firebaseRefs.users.once('value').then(snapshot => {
        const users = snapshot.val()
        console.log(users)
        for (let user in users) {
          console.log(user)
          if (users[user].name === this.form.name) {
            this.isValidName = false
            return
          }
        }
        this.isValidName = true
      })

    },
    onSubmit(evt) {
      this.$root.$firebaseRefs.users.push(this.form)
      this.$store.commit('setAnswererInfo', this.form)
      this.$router.push('seeQuestions')
    }
  }
}
</script>
<style scoped>
</style>
