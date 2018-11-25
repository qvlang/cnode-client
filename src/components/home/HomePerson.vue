<template>
  <div class='person-wrap'>
    <div class='person-title'>个人信息</div>
    <div class='person-inner'>
      <div class='inner-info'>
        <img
          class='person-icon'
          src='https://avatars3.githubusercontent.com/u/42512506?v=4&s=120' 
          alt='git图标' />
        <span class='person-name'>qvlang</span>
      </div>
      <p class='inner-floor'>积分: 0</p>
      <p class='person-desc'>“ 这家伙很懒，什么个性签名都没有留下.”</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomePerson'
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
</style>
