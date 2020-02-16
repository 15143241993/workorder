import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import { setToken, getToken } from '@/lib/util'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {


  const token = getToken()
  if (token) {
      if (to.name === 'login') next('/')
      else next()
  } else {
    setToken('')
    if (to.name === 'login') next()
    else next({ name: 'login' })
  }

  // const token = getToken()
  // if (token) {
  //   next()
  //   //next({ ...to, replace: true })
  // } else {
  //   setToken('')
  //   if (to.name === 'login') next()
  //   else next({ name: 'login' })
  // }
})

export default router
