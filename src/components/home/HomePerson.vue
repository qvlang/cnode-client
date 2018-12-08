<template>
  <div>
    <div class='person-wrap'>
      <div class='person-title'>{{personInfo.success?'个人信息':'CNode: Node.js专业中文社区' }}</div>
      <div class='person-inner'>
        <div class='inner-info'>
          <img
            v-if='personInfo.success'
            class='person-icon'
            src='https://avatars3.githubusercontent.com/u/42512506?v=4&s=120' 
            alt='git图标' />
          <span class='person-name'>{{personInfo.success?personInfo.loginname:'您可以选择登录或注册'}}</span>
        </div>
        <div v-if='personInfo.success' :key='personInfo.loginname'>
          <p class='inner-floor'>积分: 0</p>
          <p class='person-desc'>“ 这家伙很懒，什么个性签名都没有留下.”</p>
        </div>
        <div v-else key='non'>
          <router-link to="/login">
            <div class='git-login'>去登录</div>
          </router-link>
        </div>
      </div>
    </div>
    <div class='publish-topic' v-if='personInfo.success'>
      <div class='publish-button'>发布话题</div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomePerson',
  computed: {
    ...mapState(['personInfo'])
  }
}
</script>
<style lang="stylus" scoped>
  .person-wrap
    width: 100%
    height: 170px;
    background-color: #fff
    .person-title
      width: 100%
      height: 40px
      padding: 10px
      box-sizing: border-box
      color: #51585c
      font-size: 13px
    .person-inner
      width: 100%
      height: 130px
      padding: 10px
      box-sizing: border-box
      .person-icon
        width: 48px;
        vertical-align: middle
      .person-name
        margin-left: 8px
        vertical-align: middle
        font-size: 16px
      .inner-floor
        height: 26px;
        line-height: 26px
        font-size: 13px
        color: #333
        margin: 8px 0
      .person-desc
        font-size: 11px
      .git-login
        width: 54px
        line-height: 28px
        text-align: center
        margin: 16px 6px
        border-radius: 3px
        background-color: #5bc0de
        color: #ffffff
        font-size: 14px
        letter-spacing: 2px
        cursor: pointer
  .publish-topic
    width: 100%
    padding 10px
    box-sizing: border-box
    border-top: 15px solid rgb(225,225,225)
    background-color: #fff
    .publish-button
      width: 60px
      height: 28px
      line-height: 28px
      font-size: 14px
      padding: 3px 10px
      background-color: #80bd01
      color: #ffffff
      cursor: pointer
      border-radius: 3px
</style>
