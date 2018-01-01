<template lang="pug">
  .page
    el-collapse.content(v-model="activeName", :accordion="true", @change="choseArticle")
      el-collapse-item(v-for="(article, idx) in cArticleList", :name="idx", :key="idx", :title="article.title")
        b-form-item(v-for="(elem, idx) in article.content", :key="idx", :elem="elem")
    .footer
      i.el-icon-caret-top {{currArticle.positive}}
      i.el-icon-caret-bottom {{currArticle.negative}}
      i.el-icon-edit-outline(@click="showCommentMod")
      i.el-icon-share(@click="share")

    el-dialog(title="评论", :visible.sync="commentDialogShow")
      .comment-item(v-for="comment in commentList")
        .label {{comment.author}}
        .content
          p {{comment.content}}
          .replay(v-if="comment.children.length")
            .inner-comment-item(v-for="child in comment.children")
              .label
                span(v-if="child.at")
                  | {{child.author}}
                  em @
                  | {{child.at}}
                  span {{child.date}}
                span(v-else) {{child.author}}
              .content
                p {{child.content}}
      .dialog-footer(slot="footer")
        el-input(placeholder="请输入您的评论", v-model="comment")
          el-button(@click="submitComment", type="primary" slot="append") 评论
</template>

<script>
  import BFormItem from 'common/b-form-item'
  import service from './service'

  export default {
    name: 'page-detail',
    data () {
      return {
        currArticle: {
          negative: '1',
          positive: '0'
        },
        activeName: 1,
        commentDialogShow: false,
        comment: '',
        commentList: [],
        articleList: []
      }
    },
    methods: {
      getArticleList () {
        console.log('this.$router.params.id', this.$route.params.id)
        var params = {
          id: this.$route.params.id
        }
        return service.getArticleList(params).then(({re, data}) => {
          this.articleList = data
        })
      },
      getComments () {
        var params = {
          pageId: this.page.id
        }
        return service.getArticleComments(params).then(({re, data}) => {
          this.commentList = data
        })
      },
      choseArticle (idx) {
        this.currArticle = this.articleList[idx] || {negative: '1', positive: '0'}
      },
      submitComment () {
        var params = {
          comment: this.comment
        }
        service.submitComment(params).then(({re, message}) => {
          this.$message(message)
        })
      },
      showCommentMod () {
        this.commentDialogShow = true
        this.getComments()
      },
      share () {
        // z todo 分享
      }
    },
    components: {
      BFormItem
    },
    computed: {
      cArticleList () {
        return this.articleList.filter(item => item.title.includes(this.$store.state.header.keyWord))
      }
    },
    props: {
      page: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    async mounted () {
      await this.getArticleList()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .page {
    display: flex;
    flex-direction: column;
    height: 100%;
    >.content {
      padding: 0 16px;
      flex-grow: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }
    >.footer {
      padding: 0 16px;
      line-height: 36px;
      i {
        font-size: 20px;
        margin-right: 15px;
      }
    }
    .replay {
      margin-left: 2em;
      border-radius: 1em;
      margin-bottom: 1em;
      padding-left: 1em;
      border: 1px solid #d3d3d3;
    }
    .comment-item {
      margin-top: 10px;
      border-bottom: 1px solid #d3d3d3;
      .label {
        color: #409eff;
      }
    }
    .inner-comment-item {
      margin-top: 10px;
    }
    i {
      cursor: pointer;
    }
  }
</style>
