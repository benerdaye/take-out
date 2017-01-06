<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <a v-link="{path:'/goods'}">商品</a>
      <a v-link="{path:'/ratings'}">评论</a>
      <a v-link="{path:'/seller'}">商家</a>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import header from 'components/header/header.vue'

const ERR_OK = 0

export default {
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$http.get('/api/seller').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.seller = response.data
      }
    })
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" scoped>
@import './common/stylus/mixin'

.tab
  display flex
  width 100%
  height 40px
  line-height 40px
  border-1px(rgba(7,17,27,0.1))
  .tab-item
    flex 1
    text-align center
    & > a
      display block
      font-size 14px
      color rbg(77,85,93)
      &.active
        color rgb(240, 20, 20)
</style>
