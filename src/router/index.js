import Vue from 'vue'
import Router from 'vue-router'
import PageDetail from '@/components/PageDetail'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page',
      name: 'page',
      component: PageDetail
    }
  ]
})
