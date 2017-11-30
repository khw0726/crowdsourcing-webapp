<template>
  <div>
    <br>
    <h3>내 답변 현황</h3>
    <!--사람들의 생각을 {{totalCorrect}}% 맞추셨습니다.-->
    <vue-tabs>
      <v-tab title="답변 분석">
        <div class="animated fadeIn">
          <div class="row">
            <div class="col-sm-12 col-lg-6">
              <b-card class="bg-warning" :no-body="true">
                <div class="card-body pb-0">
                  <h4 class="mb-0">
                    {{totalCorrect}}%
                    <!-- TODO: 비율 -->
                  </h4>
                  <p>당신과 같은 의견을 가진 사람의 비율</p>
               </div>
                <!-- <card-bar-chart-example class="chart-wrapper px-3" style="height:70px;" height="70"/> -->
              </b-card>
            </div>
          <!--/.col-->
          </div><!--/.row-->
          <b-card>
            <div class="row">
              <div class="col-sm-5">
                <h4 class="card-title mb-0">답변 수</h4>
                <div class="small text-muted">from 26th November 2017 </div>
              </div><!--/.col-->
            
            </div><!--/.row-->
            <main-chart-example class="chart-wrapper" style="height:300px;margin-top:40px;" v-bind:userAnswers="userAnswers"></main-chart-example>
          </b-card>
          <div class="row">
            <div class="col-sm-6 col-lg-3">
              <div class="social-box facebook">
                <p><br>전체</p>
                  <div width = "234"></div>
                <ul>
                  <li>
                    <strong>{{myTotalCount}}</strong>
                    <span>내 답변 수</span>
                  </li>
                  <li>
                    <strong>{{answers.length}}</strong>
                    <span>누적 답변</span>
                  </li>
                </ul>
              </div><!--/.social-box-->
            </div><!--/.col-->
            <div class="col-sm-6 col-lg-3">
              <div class="social-box facebook">
                <p><br>연애</p>
                  <div width = "234"></div>
                <ul>
                  <li>
                    <strong>{{myLoveCount}}</strong>
                    <span>내 답변 수</span>
                  </li>
                  <li>
                    <strong>{{loveCount}}</strong>
                    <span>누적 답변</span>
                  </li>
                </ul>
              </div><!--/.social-box-->
            </div><!--/.col-->
            <div class="col-sm-6 col-lg-3">
              <div class="social-box twitter">
                <p><br>직장</p>
                <div width = "234"></div>
                <ul>
                  <li>
                    <strong>{{myBusinessCount}}</strong>
                    <span>내 답변 수</span>
                  </li>
                  <li>
                    <strong>{{businessCount}}</strong>
                    <span>누적 답변</span>
                  </li>
                </ul>
              </div><!--/.social-box-->
            </div><!--/.col-->
            <div class="col-sm-6 col-lg-3">
              <div class="social-box linkedin">
                <p><br>친구</p>
                <div width = "234"></div>
                <ul>
                  <li>
                    <strong>{{myFriendCount}}</strong>
                    <span>내 답변 수</span>
                  </li>
                  <li>
                    <strong>{{friendCount}}</strong>
                    <span>누적 답변</span>
                  </li>
                </ul>
              </div><!--/.social-box-->
            </div><!--/.col-->
            <div class="col-sm-6 col-lg-3">
              <div class="social-box google-plus">
                <p><br>가족</p>
                <div width = "234"></div>
                <ul>
                  <li>
                    <strong>{{myFamilyCount}}</strong>
                    <span>내 답변 수</span>
                  </li>
                  <li>
                    <strong>{{familyCount}}</strong>
                    <span>누적 답변</span>
                  </li>
                </ul>
              </div><!--/.social-box-->
            </div><!--/.col-->
            <div class="col-sm-6 col-lg-3">
              <div class="social-box google-plus">
                <p><br>그 외</p>
                <div width = "234"></div>
                <ul>
                  <li>
                    <strong>{{myEtcCount}}</strong>
                    <span>내 답변 수</span>
                  </li>
                  <li>
                    <strong>{{etcCount}}</strong>
                    <span>누적 답변</span>
                  </li>
                </ul>
              </div><!--/.social-box-->
            </div><!--/.col-->
          </div><!--/.row-->
          <div class="row">
            <div class="col-md-12">
              <b-card header="답변 유사도">
                <div class="row">
                  <!-- <div class="chart-wrapper"> -->
                    <!-- <bar-example class="chart-wrapper" style="width:300px;height:300px;margin-top:40px;" :numbers="[loveCorrect, businessCorrect, friendCorrect, familyCorrect, etcCorrect]"/> -->
                  <!-- </div> -->
                  <div class="col-sm-12 col-lg-4">
                    <ul class="horizontal-bars">
                      <li>
                        <div class="title">
                          연애
                        </div>
                        <div class="bars">
                          <b-progress class="progress-xs" :value="loveCorrect" variant="info"></b-progress>
                          <!-- <b-progress class="progress-xs" :value="66" variant="danger"></b-progress> -->
                        </div>
                      </li>
                      <li>
                        <div class="title">
                          직장
                        </div>
                        <div class="bars">
                          <b-progress class="progress-xs" :value="businessCorrect" variant="info"></b-progress>
                          <!-- <b-progress class="progress-xs" :value="44" variant="danger"></b-progress> -->
                        </div>
                      </li>
                      <li>
                        <div class="title">
                          친구
                        </div>
                        <div class="bars">
                          <b-progress class="progress-xs" :value="friendCorrect" variant="info"></b-progress>
                          <!-- <b-progress class="progress-xs" :value="12" variant="danger"></b-progress> -->
                        </div>
                      </li>
                      <li>
                        <div class="title">
                          가족
                        </div>
                        <div class="bars">
                          <b-progress class="progress-xs" :value="familyCorrect" variant="info"></b-progress>
                          <!-- <b-progress class="progress-xs" :value="57" variant="danger"></b-progress> -->
                        </div>
                      </li>
                      <li>
                        <div class="title">
                          그 외
                        </div>
                        <div class="bars">
                          <b-progress class="progress-xs" :value="etcCorrect" variant="info"></b-progress>
                          <!-- <b-progress class="progress-xs" :value="57" variant="danger"></b-progress> -->
                        </div>
                      </li>
                      <li>
                        <div class="title">
                          평균
                        </div>
                        <div class="bars">
                          <b-progress class="progress-xs" :value="totalCorrect" variant="info"></b-progress>
                          <!-- <b-progress class="progress-xs" :value="22" variant="danger"></b-progress> -->
                        </div>
                      </li>
                      <li class="legend">
                        <b-badge pill variant="info"></b-badge> <small>다수와 일치</small> 
                        <!-- &nbsp; <b-badge pill variant="danger"></b-badge> <small>소수의견</small> -->
                      </li>
                    </ul>
                  </div><!--/.col-->
                </div><!--/.row-->
              </b-card>
            </div><!--/.col-->
          </div><!--/.row-->
          <div class="card-columns cols-2">
            <b-card header="카테고리별 누적 답변">
              <div class="chart-wrapper">
                <pie-example style="height:300px;margin-top:40px;" :numbers="[myLoveCount, myBusinessCount, myFriendCount, myFamilyCount]"/>
                <!-- <line-example style="height:300px;margin-top:40px;" /> -->
              </div>
            </b-card>
            <b-card header="내 도전 과제">
              <!-- <img style="width: 80%;" src="/static/badges.png">
              <img src="https://drive.google.com/open?id=1a5KLLsmTuP8HHK0ReLLtY6lp09Su7C_J"> -->
              <b-row no-gutters v-for="cat in 5" :key="cat">
                <b-col cols="3" v-for="num in 4" :key="num">
                  <img class="badges" :src="imgFile(cat, num)" />
                </b-col>
              </b-row>
            </b-card>
          </div>
        </div>
      </v-tab>
    </vue-tabs>
  <!-- {{this.userAnswers}}
  {{this.totalCorrect}} -->
  </div>
</template>

<script>
// DB-TODO: Connect with ranking system

import PieExample from "./charts/PieExample";
import BarExample from "./charts/BarExample";
import LineExample from "./charts/LineExample";
import MainChartExample from "./dashboard/MainChartExample";
import { Callout } from "./coreui";
import fb from "@/fb.js";

export default {
  name: "dashboard",
  components: {
    LineExample,
    PieExample,
    BarExample,
    MainChartExample
  },
  firebase: {
    questions: fb.db.ref("questions"),
    answers: fb.db.ref("answers"),
    users: fb.db.ref("users")
  },
  computed: {
    userInfo: function(){
      console.log(this.name)
      if(this.users){
        let userInfo = this.users.find(user=> {
          return user.name === this.name
        })
        return userInfo
      }
      else {
        return null
      }
    },
    userAnswers: function() {
      console.log("ddd")
      console.log(this.userInfo)
      console.log('name', this.name)
      let answers = []
      if(this.userInfo){
        return this.answers.filter((a) => {
          return this.userInfo.questions.includes(a.questionID) && a.name === this.userInfo.name
        })
        // for(let q in this.userInfo.questions){
        //   console.log('userAnswers', this.userInfo.questions[q])
        //   let answer = this.answers.find(answer => {
        //     console.log(this.name)
        //     return (answer.name === this.name && answer.questionID === this.userInfo.questions[q])
        //   })
        //   console.log(this.answers)
        //   console.log('userAnswers', answer)
        //   answers.push(answer)
        // }      
        // return answers
      }
      else {
        return []
      }
    },
    totalCorrect: function () {
      var accurate = 0
      if(this.myTotalCount === 0){
        return 0
      }
      if(this.userAnswers.length !== 0) {
        for(let a in this.userAnswers){
          let question = this.questions.find(question => {
            console.log('totalcorrect', this.userAnswers)
            console.log('totalcorrect', this.userAnswers[a])
            return (question[".key"] === this.userAnswers[a].questionID)
          })
          let answers = question.answers
          var ycount = 0
          var ncount = 0
          for ( var i = 0; i < answers.length; i++ ) {
            if (answers[i] ===true){
              ycount ++
            }
            else{
              ncount ++
            }
          }
          let majority = ycount >= ncount ? true : false
          if (this.userAnswers[a].isYes == majority){
            accurate ++
          }
          
        }
        console.log(this.myTotalCount)
        return accurate/this.myTotalCount*100
      }
      else {
        return 0
      }
    },
    loveCorrect: function () {
      var accurate = 0
      if(this.myLoveCount === 0){
        return 0
      }
      if(this.userAnswers.length !== 0) {
        for(let a in this.userAnswers.filter((a) => a.category === 'love')){
          let question = this.questions.find(question => {
            console.log('totalcorrect', this.userAnswers)
            console.log('totalcorrect', this.userAnswers[a])
            return (question[".key"] === this.userAnswers[a].questionID)
          })
          let answers = question.answers
          var ycount = 0
          var ncount = 0
          for ( var i = 0; i < answers.length; i++ ) {
            if (answers[i] ===true){
              ycount ++
            }
            else{
              ncount ++
            }
          }
          let majority = ycount >= ncount ? true : false
          if (this.userAnswers[a].isYes == majority){
            accurate ++
          }
          
        }
        console.log(this.myTotalCount)
        return accurate/this.myLoveCount*100
      }
      else {
        return 0
      }
    },
    familyCorrect: function () {
      var accurate = 0
      if(this.myFamliyCount === 0){
        return 0
      }
      if(this.userAnswers.length !== 0) {
        for(let a in this.userAnswers.filter((a) => a.category === 'business')){
          let question = this.questions.find(question => {
            console.log('totalcorrect', this.userAnswers)
            console.log('totalcorrect', this.userAnswers[a])
            return (question[".key"] === this.userAnswers[a].questionID)
          })
          let answers = question.answers
          var ycount = 0
          var ncount = 0
          for ( var i = 0; i < answers.length; i++ ) {
            if (answers[i] ===true){
              ycount ++
            }
            else{
              ncount ++
            }
          }
          let majority = ycount >= ncount ? true : false
          if (this.userAnswers[a].isYes == majority){
            accurate ++
          }
          
        }
        console.log(this.myTotalCount)
        return accurate/this.myFamilyCount*100
      }
      else {
        return 0
      }
    },
    businessCorrect: function () {
      var accurate = 0
      if(this.myBusinessCount === 0){
        return 0
      }
      if(this.userAnswers.length !== 0) {
        for(let a in this.userAnswers.filter((a) => a.category === 'family')){
          let question = this.questions.find(question => {
            console.log('totalcorrect', this.userAnswers)
            console.log('totalcorrect', this.userAnswers[a])
            return (question[".key"] === this.userAnswers[a].questionID)
          })
          let answers = question.answers
          var ycount = 0
          var ncount = 0
          for ( var i = 0; i < answers.length; i++ ) {
            if (answers[i] ===true){
              ycount ++
            }
            else{
              ncount ++
            }
          }
          let majority = ycount >= ncount ? true : false
          if (this.userAnswers[a].isYes == majority){
            accurate ++
          }
          
        }
        console.log(this.myTotalCount)
        return accurate/this.myFamilyCount*100
      }
      else {
        return 0
      }
    },
    friendCorrect: function () {
      var accurate = 0
      if(this.myFriendCount === 0){
        return 0
      }
      if(this.userAnswers.length !== 0) {
        for(let a in this.userAnswers.filter((a) => a.category === 'friend')){
          let question = this.questions.find(question => {
            console.log('totalcorrect', this.userAnswers)
            console.log('totalcorrect', this.userAnswers[a])
            return (question[".key"] === this.userAnswers[a].questionID)
          })
          let answers = question.answers
          var ycount = 0
          var ncount = 0
          for ( var i = 0; i < answers.length; i++ ) {
            if (answers[i] ===true){
              ycount ++
            }
            else{
              ncount ++
            }
          }
          let majority = ycount >= ncount ? true : false
          if (this.userAnswers[a].isYes == majority){
            accurate ++
          }
          
        }
        console.log(this.myTotalCount)
        return accurate/this.myFriendCount*100
      }
      else {
        return 0
      }
    },
    etcCorrect: function () {
      var accurate = 0
      if(this.myEtcCount === 0){
        return 0
      }
      if(this.userAnswers.length !== 0) {
        for(let a in this.userAnswers.filter((a) => a.category === 'etc')){
          let question = this.questions.find(question => {
            console.log('totalcorrect', this.userAnswers)
            console.log('totalcorrect', this.userAnswers[a])
            return (question[".key"] === this.userAnswers[a].questionID)
          })
          let answers = question.answers
          var ycount = 0
          var ncount = 0
          for ( var i = 0; i < answers.length; i++ ) {
            if (answers[i] ===true){
              ycount ++
            }
            else{
              ncount ++
            }
          }
          let majority = ycount >= ncount ? true : false
          if (this.userAnswers[a].isYes == majority){
            accurate ++
          }
          
        }
        console.log(this.myTotalCount)
        return accurate/this.myEtcCount*100
      }
      else {
        return 0
      }
    },
    myTotalCount: function () {
      return this.answers.filter((a) => {
        return a.name === this.$store.state.answererInfo.name
      }).length
    },
    myLoveCount: function () {
      return this.answers.filter((a) => {
        return a.name === this.$store.state.answererInfo.name && a.category === 'love'
      }).length
    },
    myBusinessCount: function () {
      return this.answers.filter((a) => {
        return a.name === this.$store.state.answererInfo.name && a.category === 'business'
      }).length
    },
    myFriendCount: function () {
      return this.answers.filter((a) => {
        return a.name === this.$store.state.answererInfo.name && a.category === 'friend'
      }).length
    },
    myFamilyCount: function () {
      return this.answers.filter((a) => {
        return a.name === this.$store.state.answererInfo.name && a.category === 'family'
      }).length
    },
    myEtcCount: function () {
      return this.answers.filter((a) => {
        return a.name === this.$store.state.answererInfo.name && a.category === 'etc'
      }).length
    },
    loveCount: function () {
      return this.answers.filter((a) => {
        return a.category === 'love'
      }).length
    },
    businessCount: function () {
      return this.answers.filter((a) => {
        return a.category === 'business'
      }).length
    },
    friendCount: function () {
      return this.answers.filter((a) => {
        return a.category === 'friend'
      }).length
    },
    familyCount: function () {
      return this.answers.filter((a) => {
        return a.category === 'family'
      }).length
    },
    etcCount: function () {
      return this.answers.filter((a) => {
        return a.category === 'etc'
      }).length
    },
    name: function () {
      return this.$store.state.answererInfo.name
    },
    // loveFileNames: function () {
    //   if(this.myLoveCount < 10) {
    //     return ['static/love10_de.png', 'static/love30_de.png', 'static/love70_de.png', 'static/loveM_de.png']
    //   } else if(this.myLoveCount < 30) {
    //     return ['static/love10.png', 'static/love30_de.png', 'static/love70_de.png', 'static/loveM_de.png']
    //   } else if(this.myLoveCount < 70) {
    //     return ['static/love10.png', 'static/love30.png', 'static/love70_de.png', 'static/loveM_de.png']
    //   } else if (this.myLoveCount < 100) {
    //     return ['static/love10.png', 'static/love30.png', 'static/love70.png', 'static/loveM_de.png']
    //   } else {
    //     return ['static/love10.png', 'static/love30.png', 'static/love70.png', 'static/loveM_C.png']
    //   }
    // }
  },
  created() {
    console.log(document.cookie)
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1")
    if ((!this.$store.state.answererInfo.name)&&(!cookieValue)){
      alert("Please Log-in")
      console.log("dddd");
      this.$router.push({path:'/Login'});
    }
    else if (!this.$store.state.answererInfo.name){
      this.name = cookieValue;
      this.$root.$firebaseRefs.users.once('value').then(snapshot => {
          const users = snapshot.val()
          console.log(users)
          for (let user in users) {
            console.log(user)
            if (users[user].name === this.name) {
              console.log(this.name)
              this.$store.commit('setAnswererInfo', users[user])
            }
          }
        
      });
    }
  },

  methods: {
    imgFile: function(cat, num) {
      let category = ''
      let curCount = 0
      let number = 0
      let fileStr = 'static/badges/'
      switch(cat){
        case 1:
          category = 'love'
          curCount = this.myLoveCount
          break
        case 2:
          category = 'business'
          curCount = this.myBusinessCount
          break
        case 3:
          category = 'family'
          curCount = this.myFamilyCount
          break
        case 4:
          category = 'friend'
          curCount = this.myFriendCount
          break
        case 5:
          category = 'etc'
          curCount = this.myEtcCount
          break
      }
      switch(num){
        case 1:
          fileStr += (category + '10')
          return curCount < 10 ? fileStr + '_de.png' : fileStr + '.png'
        case 2:
          fileStr += (category + '30')
          return curCount < 30 ? fileStr + '_de.png' : fileStr + '.png'
        case 3:
          fileStr += (category + '70')
          return curCount < 70 ? fileStr + '_de.png' : fileStr + '.png'
        case 4:
          fileStr += (category)
          return curCount < 100 ? fileStr + 'M_de.png' : fileStr + 'M_C.png'

      }
    }
  }
};
</script>

<style>
.vue-tabs {
  width: 100%;
}
.tab-content {
  margin-top: -1px;
  background: #fff;
  border: 1px solid #c2cfd6;
  padding: 20px 30px;
}

.container-fluid {
  margin-right: auto;
  margin-left: auto;
  /*padding-right: 50px;
padding-left: 50px;*/
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-positive: 1;
  flex-grow: 1;
  overflow-x: hidden;
}

.badges {
  width: 100%;
}
</style>
