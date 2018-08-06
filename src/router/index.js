import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pool from '@/components/Pool'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
      {
          path: '/list',
          name: 'List',
          component: List
      },
    {
        path: '/pool',
        name: 'Pool',
        component: Pool
    }
  ]
})
