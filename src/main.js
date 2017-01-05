import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import goods from 'components/goods/goods.vue'
import ratings from 'components/rarings/ratings.vue'
import seller from 'components/seller/seller.vue'
import 'common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

let app=Vue.extend(App)
let router=new VueRouter({
  linkActiveClass: 'active'
})

//定义路由——组件映射
router.map({
  '/goods': {
    components: goods
  },
  '/ratings': {
    components: ratings
  }
  '/seller': {
    components: seller
  }
})

//挂载路由
router.start(app,'#app')

//跳转到/goods
router.go('goods')

