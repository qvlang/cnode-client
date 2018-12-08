<template>
  <div>
    <div class='message-box'>
      <div class='message-title'>
        <span class='back-home'>主页</span>
        <span class='middle-gap'>/</span>
        新消息
      </div>
      <p class='message-info'>无消息</p>
    </div>
    <div class='message-box'>
      <div class='message-title'>
        <span class=''>过往消息</span>
      </div>
      <p class='message-info'>无消息</p>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
  .message-box
    padding: 10px
    border-bottom: 15px solid rgb(225,225,225)
    .message-title
      .back-home
        color: #80bd01
      .middle-gap
        margin: 0 6px
    .message-info
      margin: 13px 0
</style>
