import Vue from 'vue'
import Router from 'vue-router'
import Browse from '@/components/Browse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Browse',
      component: Browse
    }
  ]
})
