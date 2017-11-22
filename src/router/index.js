import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },

    {
      path: '/postQuestion',
      name: 'postQuestion',
      component: PostQuestion,
      // props: true,
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
      path: '/postAnswer',
      name: 'postAnswer',
      component: PostAnswer
    },
    {
      path: '/:imgID/answerView',
      name: 'answerView',
      component: AnswerView,
      props: true
    },
    {
      path: '/answerComplete',
      name: 'answerComplete',
      component: AnswerComplete
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats
    }

  ]
})
