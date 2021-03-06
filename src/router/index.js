import Vue from 'vue'
import Router from 'vue-router'
import Join from '@/components/Join'
import Login from '@/components/Login'
import Gate from '@/components/Gate'
import QuestionList from '@/components/QuestionList'
import PostQuestion from '@/components/PostQuestion/PostQuestion'
import Annotate from '@/components/PostQuestion/Annotate'
import WriteQuestion from '@/components/PostQuestion/WriteQuestion'
import Privacy from '@/components/PostQuestion/Privacy'
import Categorize from '@/components/PostQuestion/Categorize'
import PostAnswer from '@/components/PostAnswer/PostAnswer'
import PostFinished from '@/components/PostQuestion/PostFinished'
import AnswerView from '@/components/AnswerView'
import AnswerComplete from '@/components/PostAnswer/AnswerComplete'
import Stats from '@/components/Stats'
import NewAnswerView from '@/components/NewAnswerView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Gate',
      component: Gate
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/questionList',
      name: 'questionList',
      component: QuestionList
    },
    {
      path: '/:imgID/postQuestion',
      name: 'postQuestion',
      component: PostQuestion,
      props: true,
      children: [
        {
          path: 'privacy',
          component: Privacy,
          name: 'privacy'
        },
        {
          path: 'writeQuestion',
          component: WriteQuestion,
          name: 'writeQuestion'
        },
        {
          path: 'annotate',
          component: Annotate,
          name: 'annotate'
        },
        {
          path: 'postFinished',
          name: 'postFinished',
          component: PostFinished
        },
        {
          path: '',
          component: Categorize,
          name: 'categorize'
        },
      ]
    },
    {
      path: '/:imgID/postAnswer',
      name: 'postAnswer',
      component: PostAnswer,
      props: true
    },
    {
      path: '/:imgID/answerView',
      name: 'answerView',
      component: AnswerView,
      props: true
    },
    {
      path: '/:imgID/newAnswerView',
      name: 'newAnswerView',
      component: NewAnswerView,
      props: true
    },
    {
      path: '/answerComplete',
      name: 'answerComplete',
      component: AnswerComplete
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Stats
    }

  ]
})
