import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PostQuestion from '@/components/PostQuesion'

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
      component: PostQuestion
    }
  ]
})
