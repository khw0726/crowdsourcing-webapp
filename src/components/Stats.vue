<template>
<div class="container-fluid">
  <div>
    <h3 class="ui header">내 답변 현황</h3>

<vue-tabs>
<v-tab title="답변 분석">
<div class="animated fadeIn">
  <div class="row">

    <div class="col-sm-6 col-lg-3">
      <b-card class="bg-primary" :no-body="true">
        <div class="card-body pb-0">
          <b-dropdown class="float-right" variant="transparent p-0" right>
            <template slot="button-content">
              <i class="icon-settings"></i>
            </template>
            <b-dropdown-item>Action</b-dropdown-item>
            <b-dropdown-item>Another action</b-dropdown-item>
            <b-dropdown-item>Something else here...</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
          <h4 class="mb-0">23초</h4>
          <p>답변 속도</p>
        </div>
        <card-line1-chart-example :data="[1,2,3,4,5]"  class="chart-wrapper px-3" style="height:70px;" height="70"/>
      </b-card>
    </div><!--/.col-->
    <div class="col-sm-6 col-lg-3">
      <b-card class="bg-info" :no-body="true">
        <div class="card-body pb-0">
          <b-dropdown class="float-right" variant="transparent p-0" right no-caret>
            <template slot="button-content">
              <i class="icon-location-pin"></i>
            </template>
            <b-dropdown-item>Action</b-dropdown-item>
            <b-dropdown-item>Another action</b-dropdown-item>
            <b-dropdown-item>Something else here...</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
          <h4 class="mb-0">294번째</h4>
          <p>'상사'카테고리의 답변</p>
        </div>
        <card-line2-chart-example class="chart-wrapper px-3" style="height:70px;" height="70"/>
      </b-card>
    </div><!--/.col-->
    <div class="col-sm-6 col-lg-3">
      <b-card class="bg-warning" :no-body="true">
        <div class="card-body pb-0">
          <b-dropdown class="float-right" variant="transparent p-0" right>
            <template slot="button-content">
              <i class="icon-settings"></i>
            </template>
            <b-dropdown-item>Action</b-dropdown-item>
            <b-dropdown-item>Another action</b-dropdown-item>
            <b-dropdown-item>Something else here...</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
          <h4 class="mb-0">73.6%</h4>
          <p>당신과 같은 의견을 가진 사람의 비율</p>
        </div>
        <card-bar-chart-example class="chart-wrapper px-3" style="height:70px;" height="70"/>

      </b-card>
    </div><!--/.col-->
    <div class="col-sm-6 col-lg-3">
      <b-card class="bg-danger" :no-body="true">
        <div class="card-body pb-0">
          <b-dropdown class="float-right" variant="transparent p-0" right>
            <template slot="button-content">
              <i class="icon-settings"></i>
            </template>
            <b-dropdown-item>Action</b-dropdown-item>
            <b-dropdown-item>Another action</b-dropdown-item>
            <b-dropdown-item>Something else here...</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
          <h4 class="mb-0">287위</h4>
          <p>'상사'카테고리의 랭킹</p>
        </div>
        <card-line3-chart-example class="chart-wrapper" style="height:70px;" height="70"/>
      </b-card>
    </div><!--/.col-->
  </div><!--/.row-->

  <b-card>
    <div class="row">
      <div class="col-sm-5">
        <h4 class="card-title mb-0">답변 수</h4>
        <div class="small text-muted">November 2017</div>
      </div><!--/.col-->
      <div class="col-sm-7 d-none d-md-block">
        <b-button type="button" variant="primary" class="float-right"><i class="icon-cloud-download"></i></b-button>
        <b-button-toolbar class="float-right" aria-label="Toolbar with button groups">
          <b-button-group class="mr-3" aria-label="First group">
            <b-button variant="outline-secondary">Day</b-button>
            <b-button variant="outline-secondary" :pressed="true">Month</b-button>
            <b-button variant="outline-secondary">Year</b-button>
          </b-button-group>
        </b-button-toolbar>
      </div><!--/.col-->
    </div><!--/.row-->
    <main-chart-example class="chart-wrapper" style="height:300px;margin-top:40px;" height="300"></main-chart-example>
    <div slot="footer"></div>
  </b-card>
</div>
</v-tab>

<v-tab title="답변 통계">

<div class="animated fadeIn">
  <div class="row">
    <div class="col-sm-6 col-lg-3">
      <div class="social-box facebook">
        <p><br>연애</p>
          <div width = "234"></div>
        <ul>
          <li>
            <strong>89</strong>
            <span>지난주 답변</span>
          </li>
          <li>
            <strong>459</strong>
            <span>누적 답변</span>
          </li>
        </ul>
      </div><!--/.social-box-->
    </div><!--/.col-->
    <div class="col-sm-6 col-lg-3">
      <div class="social-box twitter">
        <p><br>상사</p>
        <div width = "234"></div>
        <ul>
          <li>
            <strong>97</strong>
            <span>지난주 답변</span>
          </li>
          <li>
            <strong>792</strong>
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
            <strong>20</strong>
            <span>지난주 답변</span>
          </li>
          <li>
            <strong>292</strong>
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
            <strong>92</strong>
            <span>지난주 답변</span>
          </li>
          <li>
            <strong>894</strong>
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
          <div class="col-sm-12 col-lg-4">
            <div class="row">
              <div class="col-sm-6">
                <Callout variant="info">


                  <div class="chart-wrapper">
                  </div>
                </Callout>
              </div><!--/.col-->
              <div class="col-sm-6">
                <Callout variant="danger">

                  <div class="chart-wrapper">
                  </div>
                </Callout>
              </div><!--/.col-->
            </div><!--/.row-->
            <hr class="mt-0">
            <ul class="horizontal-bars">
              <li>
                <div class="title">
                  연애
                </div>
                <div class="bars">
                  <b-progress class="progress-xs" :value="34" variant="info"></b-progress>
                  <b-progress class="progress-xs" :value="66" variant="danger"></b-progress>
                </div>
              </li>
              <li>
                <div class="title">
                  상사
                </div>
                <div class="bars">
                  <b-progress class="progress-xs" :value="56" variant="info"></b-progress>
                  <b-progress class="progress-xs" :value="44" variant="danger"></b-progress>
                </div>
              </li>
              <li>
                <div class="title">
                  친구
                </div>
                <div class="bars">
                  <b-progress class="progress-xs" :value="88" variant="info"></b-progress>
                  <b-progress class="progress-xs" :value="12" variant="danger"></b-progress>
                </div>
              </li>
              <li>
                <div class="title">
                  가족
                </div>
                <div class="bars">
                  <b-progress class="progress-xs" :value="43" variant="info"></b-progress>
                  <b-progress class="progress-xs" :value="57" variant="danger"></b-progress>
                </div>
              </li>
              <li>
                <div class="title">
                  평균
                </div>
                <div class="bars">
                  <b-progress class="progress-xs" :value="73" variant="info"></b-progress>
                  <b-progress class="progress-xs" :value="22" variant="danger"></b-progress>
                </div>
              </li>


              <li class="legend">
                <b-badge pill variant="info"></b-badge> <small>다수와 일치</small> &nbsp; <b-badge pill variant="danger"></b-badge> <small>소수의견</small>
              </li>
            </ul>
          </div><!--/.col-->
          <div class="col-sm-6 col-lg-4">
            <div class="row">
              <div class="col-sm-6">
                <Callout variant="warning">

                  <div class="chart-wrapper">
                  </div>
                </Callout>
              </div><!--/.col-->
              <div class="col-sm-6">
                <Callout variant="success">

                  <div class="chart-wrapper">
                  </div>
                </Callout>
              </div><!--/.col-->
            </div><!--/.row-->
            <hr class="mt-0">
            <ul class="horizontal-bars type-2">
              <li>
                <i class="icon-user"></i>
                <span class="title">남성</span>
                <span class="value">43%</span>
                <div class="bars">
                  <b-progress class="progress-xs" :value="43" variant="warning"></b-progress>
                </div>
              </li>
              <li>
                <i class="icon-user-female"></i>
                <span class="title">여성</span>
                <span class="value">37%</span>
                <div class="bars">
                  <b-progress class="progress-xs" :value="37" variant="warning"></b-progress>
                </div>
              </li>
              <li class="divider"></li>
              <li>

                <span class="title">10대</span>
                <span class="value">191,235 <span class="text-muted small">(56%)</span></span>
                <div class="bars">
                  <b-progress class="progress-xs" :value="32" variant="success"></b-progress>
                </div>
              </li>
              <li>

                <span class="title">20대</span>
                <span class="value">51,223 <span class="text-muted small">(15%)</span></span>
                <div class="bars">
                  <b-progress class="progress-xs" :value="73" variant="success"></b-progress>
                </div>
              </li>
              <li>

                <span class="title">30대</span>
                <span class="value">37,564 <span class="text-muted small">(11%)</span></span>
                <div class="bars">
                  <b-progress class="progress-xs" :value="59" variant="success"></b-progress>
                </div>
              </li>
              <li>

                <span class="title">40대 이상</span>
                <span class="value">27,319 <span class="text-muted small">(8%)</span></span>
                <div class="bars">
                  <b-progress class="progress-xs" :value="24" variant="success"></b-progress>
                </div>
              </li>
              <li class="divider text-center">
                <button type="button" class="btn btn-sm btn-link text-muted"><i class="icon-options"></i></button>
              </li>
            </ul>
          </div><!--/.col-->
          <div class="col-sm-6 col-lg-4">
            <div class="row">
              <div class="col-sm-6">
                <Callout>

                  <div class="chart-wrapper">
                  </div>
                </Callout>
              </div><!--/.col-->
              <div class="col-sm-6">
                <Callout variant="primary">

                  <div class="chart-wrapper">
                  </div>
                </Callout>
              </div><!--/.col-->
            </div><!--/.row-->
            <hr class="mt-0">
            <ul class="icons-list">


              <li class="divider text-center">
              </li>
            </ul>
          </div><!--/.col-->
        </div><!--/.row-->
        <br/>
        <b-table class="table-outline table-responsive-sm b-0" hover
          :items="tableItems"
          :fields="tableFields"
          head-variant="light"
          >
          <div slot="avatar" class="avatar" slot-scope="item">
            <img :src="item.value.url" class="img-avatar" alt="">
            <span class="avatar-status" v-bind:class="{ 'bg-success': item.value.status == 'success',  'bg-warning': item.value.status == 'warning', 'bg-danger': item.value.status == 'danger', 'bg-secondary': item.value.status == '' }"></span>
          </div>
          <div slot="user" slot-scope="item">
            <div>{{item.value.name}}</div>
            <div class="small text-muted">
              <span>
                <template v-if="item.value.new">New</template>
                <template v-else>Recurring</template>
              </span> | Registered: {{item.value.registered}}
            </div>
          </div>
          <img slot="country" slot-scope="item" :src="item.value.flag" :alt="item.value.name" style="height:24px;">
          <div slot="usage" slot-scope="item">
            <div class="clearfix">
              <div class="float-left">
                <strong>{{item.value.value}}%</strong>
              </div>
              <div class="float-right">
                <small class="text-muted">{{item.value.period}}</small>
              </div>
            </div>
            <b-progress class="progress-xs" v-model="item.value.value" :variant="variant(item.value.value)"></b-progress>
          </div>
          <i slot="payment" slot-scope="item" :class="item.value.icon" style="font-size:24px"></i>
          <div slot="activity" slot-scope="item">

            <strong>{{item.value}}</strong>
          </div>
        </b-table>
      </b-card>
    </div><!--/.col-->
  </div><!--/.row-->
</div>
</v-tab>

<v-tab title="나의 상태">
<div class="animated fadeIn">
  <div class="card-columns cols-2">
    <div>
      <img style="width: 80%" src="/static/face.png">
    </div>
    <b-card header="카테고리별 누적 답변">
      <div class="chart-wrapper">
        <bar-example/>
      </div>
    </b-card>
    <b-card header="내 도전 과제">
      <img style="width: 80%;" src="/static/badges.png">
    </b-card>
  </div>
</div>
</v-tab>

</vue-tabs>
</div>
</div>
</template>

<script>
import BarExample from './charts/BarExample'
import LineExample from './charts/LineExample'
import DoughnutExample from './charts/DoughnutExample'
import RadarExample from './charts/RadarExample'
import PieExample from './charts/PieExample'
import PolarAreaExample from './charts/PolarAreaExample'
import CardLine1ChartExample from './dashboard/CardLine1ChartExample'
import CardLine2ChartExample from './dashboard/CardLine2ChartExample'
import CardLine3ChartExample from './dashboard/CardLine3ChartExample'
import CardBarChartExample from './dashboard/CardBarChartExample'
import MainChartExample from './dashboard/MainChartExample'
import SocialBoxChartExample from './dashboard/SocialBoxChartExample'
import CalloutChartExample from './dashboard/CalloutChartExample'
import { Callout } from './coreui'


export default {
  name: 'dashboard',
  components: {
    LineExample,
    BarExample,
    DoughnutExample,
    RadarExample,
    PieExample,
    PolarAreaExample,
    Callout,
    CardLine1ChartExample,
    CardLine2ChartExample,
    CardLine3ChartExample,
    CardBarChartExample,
    MainChartExample,
    SocialBoxChartExample,
    CalloutChartExample

  },
  data: function () {
    return {
      tableItems: [
        {
          avatar: { url: 'static/img/avatars/1.jpg', status: 'success' },
          user: { name: '저건 상대방이 화가 나긴 했는데 한번 더 기회를 주려고 기다리는 거예요', registered: '상대방이 화가 났나요?' },
          country: { name: 'USA', flag: 'static/img/flags/USA.png' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'fa fa-cc-mastercard' },
          activity: '63'
        },
        {
          avatar: { url: 'static/img/avatars/2.jpg', status: 'danger' },
          user: { name: '다른 말 하지 말고 사과만 하시는 게 낫습니다.', new: false, registered: '상대방이 화가 났나요?' },
          country: { name: 'Brazil', flag: 'static/img/flags/Brazil.png' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'fa fa-cc-visa' },
          activity: '44'
        },
        {
          avatar: { url: 'static/img/avatars/3.jpg', status: 'warning' },
          user: { name: '저건 100% 비꼬는 거예요ㅋㅋㅋㅋ', new: true, registered: '저 말 진심인가요?' },
          country: { name: 'India', flag: 'static/img/flags/India.png' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'fa fa-cc-stripe' },
          activity: '37'
        },
        {
          avatar: { url: 'static/img/avatars/4.jpg', status: '' },
          user: { name: '별 생각 없이 던진 농담인데 너무 앞서나가신 것 같네요', new: true, registered: '이 사람 저에게 관심있나요?' },
          country: { name: 'France', flag: 'static/img/flags/France.png' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'fa fa-paypal' },
          activity: '21'
        },


      ],
      tableFields: {
        avatar: {
          label: '<i class="icon-people"></i>',
          class: 'text-center'
        },
        user: {
          label: '추천을 많이 받은 주관식 답변'
        },

        activity: {
          label: '추천 수'
        }
      }
    }
  },
  methods: {
    variant (value) {
      let $variant
      if (value <= 25) {
        $variant = 'info'
      } else if (value > 25 && value <= 50) {
        $variant = 'success'
      } else if (value > 50 && value <= 75) {
        $variant = 'warning'
      } else if (value > 75 && value <= 100) {
        $variant = 'danger'
      }
      return $variant
    }
  }
}
</script>

<style>
.vue-tabs{
width:100%;
}
.tab-content{
margin-top: -1px;
background: #fff;
border: 1px solid #c2cfd6;
padding: 20px 30px;
}

.container-fluid{
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
</style>
