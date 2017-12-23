<template lang="pug">
  #app
    .top

    .content
      .left
        router-view
      .right
        el-menu(:defaultActive="defaultActive", @open='handleOpen', @close='handleClose')
          b-menu(:item='menu' v-for="(menu, idx) in navList", :key="idx", :index="menu.id")
            template(slot="title", slot-scope="props")  {{props.item.label}}

        .recommend-item(v-for="(recommend, idx) in recommendList", @click="redirect(recommend)")
            img.left-item(:src="recommend.thumbnail")
            .right-item
              .title {{recommend.title}}
              .desc {{recommend.desc}}
    .footer

</template>

<script>
  import BMenu from 'common/b-menu'
  import service from './components/service'

  export default {
    name: 'app',
    data () {
      return {
        defaultActive: 'it',
        navList: [],
        recommendList: []
      }
    },
    methods: {
      handleClose () {
        console.log('handleClose')
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

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    .top {
    }
    .content {
      display: flex;
      flex-grow: 1;
      .left {
        flex-grow: 1;
        overflow: auto;
      }
      .right {
        width: 300px;
        overflow: auto;
      }
      .recommend-item {
        .left-item {
          width: 25%;
          vertical-align: top;
        }
        .right-item {
          width: 75%;
          display: inline-block;
          vertical-align: top;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .footer {
    }
  }
</style>
