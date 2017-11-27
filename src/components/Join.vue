<template>
<div><br>
  <h3 id="registration">회원가입</h3>
  <b-form @submit.prevent="onSubmit">
    <b-form-group id="exampleInputGroup1" label="아이디:" label-for="exampleInput1" description="아이디는 본인 식별 용도로만 사용됩니다.">
      <b-form-input id="exampleInput1" type="text" state="isValidName" v-model="form.name" required placeholder="네 자 이상의 아이디를 입력해주세요"></b-form-input>
    </b-form-group>
    <span v-if="isValidName === false">이미 존재하는 아이디입니다.</span>
    <!-- <b-input-group-button slot="right">
      <b-btn variant="info" @click="checkNameValidity">중복확인</b-btn>
    </b-input-group-button> -->
    <br>관심 카테고리:
    <b-form-checkbox-group id="checkboxes1" name="interest" v-model="form.interest">
      <b-form-checkbox value="love">연애</b-form-checkbox>
      <b-form-checkbox value="friend">친구</b-form-checkbox>
      <b-form-checkbox value="business">직장</b-form-checkbox>
      <b-form-checkbox value="family">가족</b-form-checkbox>
      <b-form-checkbox value="etc">그 외</b-form-checkbox>
    </b-form-checkbox-group>
    <br>
    <b-button v-if="isPushAvailable && !form.pushSubscribed" @click="registerNotification">
      관심 카테고리의 질문에 대한 알림을 받겠습니다.
    </b-button>
    <!-- <b-form-checkbox id="checkbox1" @click="registerNotification" v-model="form.selected" value="accepted" unchecked-value="not_accepted">
      관심 카테고리의 질문에 대한 알림을 받겠습니다.
    </b-form-checkbox> -->
    <br><br>성별:
    <b-form-radio-group id="radio1" name="gender" v-model="form.gender">
      <b-form-radio value="man">남</b-form-radio>
      <b-form-radio value="woman">여</b-form-radio>
      <b-form-radio value="etc">기타</b-form-radio>
    </b-form-radio-group>
    <br>연령대:
    <b-form-radio-group id="radio2" label="checkboxes2" name="age" v-model="form.age">
      <b-form-radio value="10">10대</b-form-radio>
      <b-form-radio value="20">20대</b-form-radio>
      <b-form-radio value="30">30대</b-form-radio>
      <b-form-radio value="40">40대</b-form-radio>
      <b-form-radio value="50">50대 이상</b-form-radio>
    </b-form-radio-group>
    <b-button type="submit" variant="primary">제출</b-button>
    <b-button type="reset" variant="secondary">되돌리기</b-button>
  </b-form>
</div>
</template>
<script>
import fb from '@/fb.js'
export default {
  data() {
    return {
      // interest: [],
      age: [],
      form: {
        name: '',
        interest: [],
        age: null,
        gender: null,
        pushSubscribed: false,
        selected: [],
        pushToken: ''
      },

      // isValidName: null
    }
  },
  computed: {
    isValidName: function () {
      if(this.form.name.length < 4){
        return null
      }
      let idx = this.$root.users.findIndex((element) => {
        return element.name === this.form.name
      })
      return (idx === -1)
    },
    isPushAvailable: function () {
      return ('serviceWorker' in navigator) && ('PushManager' in window)
    }
  },
  methods: {
    onSubmit(evt) {
      this.$root.$firebaseRefs.users.push(this.form)
      this.$store.commit('setAnswererInfo', this.form)
      document.cookie = "username="+this.form.name+";";

      this.$router.push('questionList')
    },
    registerNotification: function () {
      // alert('adsf')
      fb.messaging.requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        navigator.serviceWorker.register('/static/sw.js')
        .then((registration) => {
          fb.messaging.useServiceWorker(registration);
          fb.messaging.getToken()
          .then((currentToken) => {
            if (currentToken) {
              console.log(currentToken)
              this.form.pushToken = currentToken
              this.form.pushSubscribed = true
            } else {
              // Show permission request.
              console.log('No Instance ID token available. Request permission to generate one.');
              // Show permission UI.
              alert('알림 구독을 실패했습니다. 다시 시도해주세요.')
            }
          })
          .catch(function(err) {
            console.log(err)
            alert('알림 구독을 실패했습니다. 다시 시도해주세요.')
          });
        });
      })
      .catch(function(err) {
        console.log('Unable to get permission to notify.', err);
      });
    }
  }
}
</script>
<style scoped>
</style>
