<template>

  <div>
    <b-jumbotron bg-variant="light" header="눈치백단" >
      <hr class="my-4">
      <p>
        “눈치백단”은 채팅 중, 속 뜻이 이해가 되지 않는 부분을 사람들에게 물어볼 수 있는 서비스입니다.
        어떤 질문이 올라오는지 보고 싶으시다면, 제대로 찾아오셨습니다. 로그인을 해주세요.
        질문을 남기시려면 카카오톡 플러스친구 '눈치백단'을 찾아주세요. 
      </p>
      <b-button variant="primary" @click="$router.push({name: 'logIn'})">로그인</b-button>
      <b-button variant="secondary" @click="$router.push({name: 'Join'})">회원가입</b-button>
    </b-jumbotron>
    <!-- <p>
    “눈치백단”은 채팅을 통한 대화 중, 속 뜻이 이해가 되지 않는 부분을 캡쳐해 사람들에게 물어보고, 질문에 답변하실 수 있는 서비스입니다. 
    <br>
    질문을 남기시려면 카카오톡 플러스친구 '눈치백단'을 찾아주세요. 
    <br>
    다른 사람들의 질문을 보고싶으시다면, 로그인을 해주세요.
    </p> -->

  </div>
</template>
<script>
import fb from '@/fb.js'
export default {
  data: function () {
    return {
      name: ''
    }
  },
  firebase: {
    users: fb.db.ref('users')
  },
  created() {
    console.log(document.cookie)
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1")
    if (!this.$store.state.answererInfo.name && cookieValue){
      this.name = cookieValue;
      this.$root.$firebaseRefs.users.once('value').then(snapshot => {
          const users = snapshot.val()
          console.log(users)
          for (let user in users) {
            console.log(user)
            if (users[user].name === this.name) {
              console.log(this.name)
              this.$store.commit('setAnswererInfo', users[user])
              this.$router.push({name: 'questionList'})
            }
          }
      })
    }
  }
}
</script>
