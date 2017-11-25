<template>
<div>
  <h3 id="login">로그인</h3>
  <b-form @submit.prevent="onSubmit">
    <b-form-group id="exampleInputGroup1" label="아이디:" label-for="exampleInput1">
      <b-form-input id="exampleInput1" :state="isValidName" type="text" v-model="name" required placeholder="아이디를 입력해주세요"></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">로그인</b-button>
  </b-form>
</div>
</template>

<script>

export default {
  name: 'logIn',
  data: function() {
    return {
      name: '',
      isValidName: null
    }
  },
  methods: {
    onSubmit: function() {
      document.cookie = "username="+this.name+";";
      this.$root.$firebaseRefs.users.once('value').then(snapshot => {
        const users = snapshot.val()
        console.log(users)
        for (let user in users) {
          console.log(user)
          if (users[user].name === this.name) {
            this.$store.commit('setAnswererInfo', users[user])
            this.$router.push('questionsList')
          }
        }
        this.isValidName = false
      })
    }
  }
}
</script>

<style scoped>

</style>
