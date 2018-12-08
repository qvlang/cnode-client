<template>
  <div class='message-wrap'>
    <div class='main-content clearfix'>
      <div class='main-left'>
        <message-read></message-read>
      </div>
      <div class='main-right'>
        <home-person></home-person>
      </div>
    </div>
  </div>
</template>
<script>
import MessageRead from '../components/message/MessageRead'
import HomePerson from '../components/home/HomePerson'
export default {
  name: 'HomeMain',
  components: {
    MessageRead,
    HomePerson
  }
}
</script>
<style lang='stylus' scoped>
  .message-wrap
    width: 100%
    position: absolute
    top: 50px
    bottom: 0
    padding: 15px 0
    background-color: rgb(225,225,225)
    .main-content
      width: 90%
      margin: 0 auto
      .main-left
        width: 78%
        float: left
        background-color: rgb(255,255,255)
        border: 1px soild red
      .main-right
        width: 20%
        margin-left 2%
        float: right
</style>
