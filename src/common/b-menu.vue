<template lang="pug">
  el-submenu(v-if="isFold(item)", :index="''+index")
    template(slot="title", slot-scope="props")
      slot(name="title", :item="item")
    b-menu(:item="child", v-for="(child, idx) in item.children", :key="idx", :index="child.id")
      template(slot="title", slot-scope="props") {{props.item.label}}
      span(slot-scope="props") {{props.item.label}}
  el-menu-item(v-else, :index="''+index", @click="showPage")
    slot(:item="item")
</template>

<script>
  export default {
    name: 'b-menu',
    data () {
      return {}
    },
    props: {
      item: {
        type: Object,
        required: true
      },
      index: {
        required: true
      }
    },
    methods: {
      isFold (item) {
        return item.children && item.children.length
      },
      showPage () {
        this.$emit('show-page', ...arguments)
      }
    },
    mounted () {}
  }
</script>

<style lang="less">

</style>
