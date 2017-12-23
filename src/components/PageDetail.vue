<template lang="pug">
  .page
    el-collapse(v-model="activeName")
      el-collapse-item(v-for="(article, idx) in articleList", :name="idx", :key="idx", :title="article.title")
        b-form-item(v-for="(elem, idx) in article.content", :key="idx", :elem="elem")
        .footer
          i.el-icon-caret-top {{article.positive}}
          i.el-icon-caret-bottom {{article.negative}}
          i.el-icon-edit-outline(@click="showCommentMod")
          i.el-icon-share(@click="share")
</template>

<script>
  import BFormItem from 'common/b-form-item'
  import service from './service'

  export default {
    name: 'b-page-detail',
    data () {
      return {
        activeName: 1,
        articleList: []
      }
    },
    methods: {
      getArticleList () {
        return service.getArticleList().then((re, data) => {
          this.articleList = data
        })
      },
      showCommentMod () {
        // z todo 弹框显示comment
      },
      share () {
        // z todo 分享
      }
    },
    components: {
      BFormItem
    },
    mounted () {
      this.getArticleList()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
