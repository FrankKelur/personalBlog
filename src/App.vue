<template lang="pug">
  #app
    .top
      .top-inner
        img(src="/images/logo.jpg")
        .el-input-container
          el-input(placeholder='输入您感兴趣的', v-model="keyWord")
            i.el-icon-search(slot="append", @click="searchByKeyWord")
        el-popover.right.personal(placement="right", tigger="hover")
          img(src="/images/myself.png" slot="reference")
          .personal-info-item
            .label ID
            .info Sailing
          .personal-info-item
            .label email
            .info chaopengzhai@163.com
        i.el-icon-message.right(@click="messageMeMod")
    .content
      .left
        router-view
      .right
        el-menu(:defaultActive="defaultActive", @open='handleOpen', @close='handleClose' background-color="#545c64" text-color="#fff" active-text-color="#ffd04b")
          b-menu(:item='menu' v-for="(menu, idx) in navList", :key="idx", :index="menu.id")
            template(slot="title", slot-scope="props")
              i.nav-icon(:class="['icon', ' iconfont', props.item.icon]")
              |{{props.item.label}}
            span(slot-scope="props")
              i.nav-icon(:class="['icon', ' iconfont', props.item.icon]")
              |{{props.item.label}}
        .recommend-container
          .recommend-item(v-for="(recommend, idx) in recommendList", @click="redirect(recommend)")
              img.left-item(:src="recommend.thumbnail")
              .right-item
                .title {{recommend.title}}
                .desc {{recommend.description}}
    .footer

</template>

<script>
  import BMenu from 'common/b-menu'
  import service from './components/service'

  export default {
    name: 'app',
    data () {
      return {
        keyWord: '',
        defaultActive: 'it',
        navList: [],
        recommendList: []
      }
    },
    methods: {
      handleClose () {
        console.log('handleClose')
      },
      searchByKeyWord () {
        this.$store.dispatch('headerChange', this.keyWord)
      },
      search () {
        console.log('search')
        // z todo 根据关键字过滤，当前页中的articleList
      },
      messageMeMod () {
        console.log('messageMeMod')
        // z todo 显示留言弹框
      },
      handleOpen () {
        console.log('handleOpen')
      },
      getNavList () {
        return service.getNavList().then(({re, data}) => {
          this.navList = data
        })
      },
      getRecommendList () {
        return service.getRecommendList().then(({re, data}) => {
          this.recommendList = data
        })
      },
      redirect (recommend) {
        location.href = recommend.url
      }
    },
    components: {
      BMenu
    },
    async mounted () {
      await this.getNavList()
      await this.getRecommendList()
    }
  }
</script>

<style lang="less" scoped>
  #app {
    background: #f3f3f3;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    height: 100%;
    .top {
      font-size: 40px;
      line-height: 45px;
      background: white;
      .top-inner {
        width: 1000px;
        margin: auto;
        .right {
          float: right;
          .iconfont {
            margin-right:10px;
          }
        }
        * {
          margin-right: 15px;
        }
        .personal {
          margin-right: 0 !important;
        }
      }
      img {
        height: 50px;
        border-radius: 4px;
        vertical-align: middle;
      }
      .el-input-container {
        vertical-align: middle;
        display: inline-block;
        .el-input {
            position: relative;
            bottom: 5px;
        }
      }
      i.el-icon-message {
        vertical-align: middle;
        position: relative;
            top: 10px;
      }
    }
    .content {
      margin-top: 10px;
      display: flex;
      flex-grow: 1;
      width: 1000px;
      margin-left: auto;
      margin-right: auto;
      .left {
        background: white;
        flex-grow: 1;
        overflow-y: hidden;
        overflow-x: hidden;
        width: 740px;
      }
      .right {
        margin-left: 10px;
        padding: 0 16px;
        background: white;
        width: 300px;
        overflow: auto;
      }
      .recommend-container {
            padding: 1em;
          border-radius: 1em;
          border: 1px solid #d3d3d3;
        margin: 10px 0;
      }
      .recommend-item {
        .left-item {
          width: 25%;
          vertical-align: top;
        }
        .right-item {
          width: 73%;
          line-height: 36px;
          padding: 1%;
          display: inline-block;
          vertical-align: top;
          .title, .desc {
            text-align: start;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
    .footer {
    }
  }
</style>
<style lang="less">
  .personal-info-item {
    vertical-align: middle;
    .label{
          color: #c0c4cc;
    }
  }
  i.nav-icon.iconfont{
    margin-right: 10px;
  }
</style>
