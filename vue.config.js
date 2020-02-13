const path = require('path')
const resolve = dir => path.join(__dirname,dir)


const BASE_URL = process.env.NODE_ENV === 'procution' ? '/' : '/'

module.exports = {
  lintOnSave: false,
  baseUrl:BASE_URL,
  chainWebpack: config =>{
    config.resolve.alias
    .set('@',resolve('src'))
    .set('_c',resolve('src/components'))
  },
  procutionSourceMap: false,
  devServer: {
     proxy: ""
  }
}
