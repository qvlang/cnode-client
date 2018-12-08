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
        <ul @click='handleClick'>
          <li class='title-list'
           v-for='(item, index) of title'
           :key='index'
           >{{item}}
         </li>
         <li class='title-list'>{{this.$store.state.personInfo.success? '退出':'登录'}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import qs from 'query-string';
import { mapState } from 'vuex'
export default {
  name: 'HeaderNav',
  data () {
    return {
      title: ['首页','新手入门','API','关于','设置']
    }
  },
  methods: {
    //使用事件委托实现各个按钮点击功能
    //判断是否取得登录用户信息 以此切换登录退出状态
    handleClick (e) {
      switch(e.target.innerText){
        case '首页':
          this.$router.push('/');
            break;
        case '未读消息':
          this.$router.push('/message');
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
            throw new Error(err);
          })
            break;
        case '登录':
          this.$router.push('/login');
            break;
        case '退出':
          this.$store.commit('emptyPerson');
          break;
        default:
      }
    }
  },
  computed: mapState(['personInfo']),
  // 监听登录返回的信息判断是否登录 控制标题是否显示
  watch: {
    personInfo(newValue, oldValue) {
      if(newValue.success){
        this.title.splice(1,0,'未读消息');
      }else{
        this.title.splice(1,1);
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

