import Vue from 'vue'
import Router from 'vue-router'
import rec from '@/components/rec/rec'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/rec'
    }, {
      path: '/rec',
      name: 'rec',
      component:rec
    }
  ]
})
