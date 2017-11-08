import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PostQuestion from '@/components/PostQuestion/PostQuestion'
import Annotate from '@/components/PostQuestion/Annotate'
import WriteQuestion from '@/components/PostQuestion/WriteQuestion'
import Privacy from '@/components/PostQuestion/Privacy'
import Categorize from '@/components/PostQuestion/Categorize'
import PostAnswer from '@/components/PostAnswer/PostAnswer'
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
      children: [
        {
          path: 'categorize',
          component: Categorize
        },
        {
          path: 'privacy',
          component: Privacy
        },
        {
          path: 'writeQuestion',
          component: WriteQuestion
        },
        {
          path: 'annotate',
          component: Annotate
        }
      ]
    },
    {
      path: '/postAnswer',
      name: 'postAnswer',
      component: PostAnswer
    }
  ]
})
