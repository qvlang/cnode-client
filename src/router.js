import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Detail from './views/Detail'
import Login from './views/Login'
import Message from './views/Message'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    }
  ]
})
