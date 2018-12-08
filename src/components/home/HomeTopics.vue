<template>
  <div>
    <div class='content-title'>
      <div class="title-all">全部</div>
      <ul class='title-wrap'>
        <li
          v-for='(item, index) of title' :key='index' 
          class='title-list'>{{item}}</li>
      </ul>
    </div>
    <div>
      <ul>
        <li 
          class='topic-list clearfix'
          v-for='(item, index) of topicList'
          :key='item.id'
        >
          <div class='list-left'>
            <img 
              class='user-avatar'
              :src='item.author.avatar_url'
              alt="头像">
            <span class='comment-rate'>{{item.reply_count}}/{{item.visit_count}}</span>
            <span class='go-top' v-if='index < 3'>置顶</span>
            <router-link :to='{ path: "detail", query: {id: item.id}}'>
              <p class='topic-title'>{{item.title}}</p>
            </router-link>
          </div>
          <div class='list-right'>
            <img 
              class='user-icon'
              src="https://avatars2.githubusercontent.com/u/26091592?v=4&s=120" 
              alt="用户标识">
            <span class='topic-day'>一天前</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeTopics',
  data () {
    return {
      title: ['精华','分享','问答','招聘','客户端测试']
    }
  },
  computed: {
    ...mapState(['topicList'])
  },
  mounted () {
    this.$store.dispatch('getTopics')
  }
}
</script>
<style lang='stylus' scoped>
@import '~@/assets/styles/variable.styl'
  .content-title
    width: 100%
    height: 40px
    padding: 10px
    box-sizing: border-box
    .title-all
      width: 28px
      background-color: $commonColor
      display: inline-block
      color: #fff
      padding: 3px 4px
      border-radius: 3px
      margin: 0 8px
      vertical-align: middle
    .title-wrap
      display: inline-block
      vertical-align: center
      .title-list
        margin: 0 10px
        color: $commonColor
        vertical-align: center
        display: inline-block
  .topic-list
      width: 100%
      height: 50.188px
      padding: 10px
      font-size: 14px
      color: #333
      box-sizing: border-box
      .list-left
        float: left
        width: 88%
        height: 100%
        line-height: 30px
        .user-avatar
          width: 30px
          vertical-align: middle
        .comment-rate
          width: 70px
          height: 100%
          display: inline-block
          text-align: center
          font-size: 14px
          vertical-align: middle
        .go-top
          padding: 4px 4px
          background: $commonColor
          border-radius: 3px
          color: #fff
          font-size: 12px
        .topic-title
          color: #888
          width: 75%
          display: inline-block
          vertical-align: middle
          font-size: 16px
          margin-left: 8px
          ellipsis()
          vertical-align: middle
      .list-right
        line-height: 30px
        float: right
        width: 10%
        height: 100%
        margin-left: 2%
        .user-icon
          width: 18px
        .topic-day
          width: 50px
          height: 20px;
          text-align: center
          display: inline-block
          font-szie: 11px
          color: #778087
          margin-left: 8px
</style>
