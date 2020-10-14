import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局怪异盒
import "./assets/style/reset.stylus"
// 新的rem
import "amfe-flexible/index.js";

import "./assets/style/classify.stylus";
Vue.config.productionTip = false

import {
  Tabbar, 
  TabbarItem,
  Swipe, 
  SwipeItem,
  Grid, 
  GridItem,
  Icon,
  Toast,
  Lazyload,
  Tab, 
  Tabs,
  NavBar,
  Field,
  Button,
  Popup,
  Step,
  Steps,
  Progress
} from 'vant'

Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem )
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Icon)
Vue.use(Toast)
Vue.use(Lazyload)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(NavBar)
Vue.use(Field)
Vue.use(Button)
Vue.use(Popup);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Progress);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
