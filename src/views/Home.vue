<template>
  <div class='home-wrap'>
    <div class='main-content clearfix'>
      <div class='main-left'>
        <home-topics></home-topics>
      </div>
      <div class='main-right'>
        <home-person></home-person>
      </div>
    </div>
  </div>
</template>
<script>
import HomeTopics from '../components/home/HomeTopics'
import HomePerson from '../components/home/HomePerson'
export default {
  name: 'HomeMain',
  components: {
    HomeTopics,
    HomePerson
  }
}
</script>
<style lang='stylus' scoped>
  .home-wrap
    width: 100%
    position: absolute
    top: 50px
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
