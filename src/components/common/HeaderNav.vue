<template>
  <div class='nav-container'>
    <div class='nav-content clearfix'>
      <div class='nav-left'>
        <img 
          src="//static2.cnodejs.org/public/images/cnodejs_light.svg" 
          alt="cnode" 
          class='nav-img' />
        <input type="text" class='nav-input' />
      </div>
      <div class='nav-right'>
        <ul>
          <li class='title-list'
           v-for='(item, index) of title'
           :key='index' 
           @click='handleClick'
           >{{item}}
         </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import qs from 'query-string'
export default {
  name: 'HeaderNav',
  data () {
    return {
      title: ['首页','未读消息','新手入门','API','关于','设置','登录']
    }
  },
  methods: {
    handleClick (e) {
      switch(e.target.innerText){
        case '登录':
          axios({
            url: 'http://localhost:3333/login',
            method: 'POST',
            data: qs.stringify({accessToken: ''}),
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          })
          .then(res=>{
            console.log(res.data)
          })
          .catch(err=>{
            console.log(err.message);
          })
          break;
        case '关于':
          axios.defaults.withCredentials=true;
          axios({
            url: 'http://localhost:3333/message/mark_all',
            method: 'POST',
            params: { needAccessToken: true},
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          })
          .then(res=>{
            console.log(res.data)
          })
          .catch(err=>{
            console.log(err.message);
          })
          break;
        default:
          break;
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
  .nav-container
    height: 50px
    background: #444
    .nav-content
      width: 80%
      min-width: 960px
      margin: 0 auto
      max-width: 1400px
      .nav-left
        height: 50px
        line-height: 50px
        float: left
        .nav-img
          width: 120px
          vertical-align: center
        .nav-input
          width: 233px
          height: 20px
          margin-top: 3px
          vertical-align: center
          padding: 2px 7px
          border-radius: 15px
          margin-left: 15px
      .nav-right
        float: right
        .title-list
          height: 40px
          line-height: 40px
          text-align: center
          margin: 5px 20px 0 0
          font-size: 13px
          color: #ccc
          display: inline-block
          cursor: pointer
</style>

