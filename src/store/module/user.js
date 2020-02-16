import { login } from '@/api/user'
import { setToken } from '@/lib/util'
const state = {

}

const mutations = {

}

const actions = {
  login ({ commit }, { userName, password, code, nowData }) {
    return new Promise((resolve, reject) => {
      login({ userName, password, code, nowData }).then(res => {
        if (parseInt(res.code) == 200 && res.result.loginSuccess ) {
          setToken(res.result.authorization)
          resolve()
        } else {
          reject(new Error('登录遇到问题'))
        }
      }).catch(error => {
        reject(error)
      })
    })
  },

  logout () {
    setToken('')
  }
}

export default{
  state,
  mutations,
  actions

}
