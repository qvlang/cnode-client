<template>
  <div>
    <div class='detail-wrap'>
      <div class='header-wrap'>
        <div class='header-title'>
          <span class='go-top'>置顶</span>
          <span class='title-info'>{{getTopic.title}}</span>
        </div>
        <div class='publish-wrap'>
          <span class='publish-info'> · 发布于 23 天前 </span>
        </div>
        <div class='save-detail'>收藏</div>
      </div>
      <div class='detail-content' v-html='getTopic.content'></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainDetail',
  computed: {
    getTopic () {
      return this.$store.getters.getTopicInfo(this.$route.query.id)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .detail-wrap
    .detail-content >>> .markdown-text
      padding: 50px
      line-height: 20px
      font-size: 16px
    width: 100%
    background: #fff
    .header-wrap
      position: relative
      width: 100%
      padding: 10px
      box-sizing: border-box
      border-bottom: 1px solid #f2f2f2
      .header-title
        width: 75%
        margin: 8px 0 13px 0
        line-height: 130%
        .go-top
          background: #80bd01
          padding: 2px 4px
          font-size: 12px
          color: #fff
          margin-right: 8px
          border-radius: 3px
        .title-info
          font-size: 22px
          font-wight: 700
          line-height: 140%
          vertical-align: middle
      .publish-wrap
        width: 100%
        height: 34px
        .save-detail
          font-size: 12px
          color: #838383
      .save-detail
        width: 32px
        height: 28px
        line-height: 28px
        text-align: center
        border-radius: 3px
        background: #80bd01
        padding: 3px 10px
        font-size: 14px
        color: #fff
        position: absolute
        bottom: 10px
        right: 10px
</style>
