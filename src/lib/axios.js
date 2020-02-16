import axios from 'axios'
import { baseURL } from '@/config'
import { getToken, setToken } from '@/lib/util'
class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
      }
    }
    return config
  }
  distroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
    }
  }
  interceptors (instance, url) {
    instance.interceptors.request.use(config => {
      if (!Object.keys(this.queue).length) {
      }
      this.queue[url] = true
      config.headers['Authorization'] = getToken()
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      if(res.code == 99999999){
        Vue.prototype.$message({
          type: "error",
          message: "身份已过期，请重新登录"
        });
        setToken('')
        localStorage.clear();
      }
      if (res == "oooops!error, i'm the fallback."  ){
        Vue.prototype.$message({
          type: "error",
          message: "服务异常，请稍后"
        });
      }
      this.distroy(url)
      const { data } = res
      return data
    }, error => {
      this.distroy(url)
      return Promise.reject(error.response.data)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
