<template>
  <div class='login-wrap'>
    <div class='login-area'>
      <div class='login-box'>
        <input class='info-input' 
          type='text' 
          placeholder='请输入登录token'
          v-model='inputValue' />
        <div class='login-button' @click='handleLogin'>登录</div>
        <div class='err-message' v-if="loginMessage">{{errMessage}}</div>
      </div>
    </div>
  </div>  
</template>
<script>
import axios from 'axios';
import qs from 'query-string';
export default {
  name: 'Login',
  data () {
    return {
      loginMessage: false,
      inputValue: '',
      errMessage: ''
    }
  },
  methods: {
    // 点击登录发送axios请求信息 返回成功则跳转否者提示错误
    //用户信息请求成功后保存在store中
    handleLogin () {
      if(!this.inputValue){
        this.loginMessage = true;
        this.errMessage = '请输入token';
      }else{
        axios({
            url: 'http://localhost:3333/login',
            method: 'POST',
            data: qs.stringify({accessToken: this.inputValue}),
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          })
          .then(res=>{
            if(res.data.success){
              this.$store.commit('updatePerson',res.data.data);
              this.$router.push('/');
            }else{
              this.loginMessage = true;
              this.errMessage = '登录失败,请输入正确token'
            }
          })
          .catch(err=>{
            console.log(err.message);
          })
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .login-wrap
    width: 100%
    position: absolute
    top: 50px
    bottom: 0
    padding: 15px 0
    background-color: rgb(225,225,225)
    .login-area
      overflow: hidden
      width: 60%
      height: 600px
      margin: 0 auto
      background: #ffffff
      .login-box
        width: 60%
        height: 400px
        margin: 100px auto 0
        box-sizing: border-box
        padding: 120px
        background: rgb(225,225,225)
        .info-input
          height: 40px
          width: 100%
          text-indent: 10px
        .login-button
          width: 100%
          height: 40px
          line-height: 40px
          border-radius: 20px
          background: #80bd01
          margin: 20px 0
          color: #fff
          text-align: center
          font-size: 18px
          cursor: pointer
        .err-message
          width: 100%
          height: 40px
          line-height: 40px
          text-align: center
          color: red
</style>
