<template>
  <div>
    <v-header :seller="seller"></v-header>
    <ul class="tab border-1px">
      <li class="item"><a v-link="{path:'/goods'}">商品</a></li>
      <li class="item"><a v-link="{path:'/ratings'}">评论</a></li>
      <li class="item"><a v-link="{path:'/seller'}">商家</a></li>
    </ul>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import {urlParse} from 'common/js/util'
import header from 'components/header/header.vue'

const ERR_OK = 0

export default {
  data () {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse()
          return queryParam.id
        })()
      }
    }
  },
  created () {
    this.$http.get(`/api/seller?id=${this.seller.id}`).then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.seller = Object.assign({}, this.seller, response.data)
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
  padding 0
  width 100%
  height 40px
  line-height 40px
  border-1px(rgba(7,17,27,0.1))
  .item
    float left
    width 33%
    text-align center
  .tab-item
    flex 1
    text-align center
    & > a
      display block
      width 33%
      font-size 14px
      color rbg(77,85,93)
      &.active
        color rgb(240, 20, 20)
</style>
