import axios from './index'


export const login = ({ userName, password, code, nowData }) => {
  return axios.request({
    url: '/login/check',
    method: 'post',
    data: {
     'account': userName,
      password,
     'vcode': code
    },
    headers: {"Time-Sign": nowData}
  })
}

export const getCode = ({nowData})=>{
 return axios.request({
      method: 'post',
      url: '/login/getVcode',
      headers: {"Time-Sign": nowData}
  })
  // .then((res)=> {
  //     if(res.status == 200 && res.data.code == 200){
  //       this.loginForm.imgcode ='data:image/png;base64,'+res.data.result.codeData;
  //       // console.log(this.loginForm.imgcode)
  //     }else{
  //       this.$message.error(res.data.message);
  //     }
  // }).catch((error)=> {
  //     console.log(error);
  // });
}
