<template>
  <div>
    <input v-model="userName" />
    <input type="password" v-model="password"/>
    <input type="text" v-model="code"/>
    <button @click="handleSubmit">登录</button>
    <div class="code-img"><img :src="imgcode"/></div>
    <span class="code-change non-select"><a @click="getCode" href="javascript:void(0)">看不清楚</a></span>

  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { getCode } from '../api/user'
export default {
  name: 'login_page',
  data () {
    return {
      userName: '',
      password: '',
      code:'',
      imgcode:'',
      nowData:''
    }
  },
  mounted(){
     this.getCode()
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    handleSubmit () {
      this.login({
        userName: this.userName,
        password: this.$base64.encode(this.password),
        code: this.code,
        nowData: this.nowData
      }).then((res) => {
        this.$router.push('/')


      }).catch(error => {
        console.log(error)
      })
    },
    getCode(){
      this.nowData = Date.parse(new Date())
      getCode({nowData:this.nowData}).then((res)=>{
        this.imgcode ='data:image/png;base64,'+res.result.codeData;
     })
    }
  }
}
</script>
