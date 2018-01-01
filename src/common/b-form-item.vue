<template lang="pug">
  h2(v-if="elem.type==='h2'") {{elem.text}}
  p(v-else-if="elem.type==='p'") {{elem.text}}
  p(v-else-if="elem.type==='img'")
    img(:src="elem.url")
</template>

<script>
  export default {
    name: 'b-form-item',
    data () {
      return {}
    },
    props: {
      elem: {
        type: Object,
        required: true
      }
    },
    methods: {
    },
    mounted () {}
  }
</script>

<style lang="less">

</style>
