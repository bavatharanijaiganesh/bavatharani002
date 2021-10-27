
import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import {routes} from './routes'
  vue.use(vueRouter);
  const router=new vueRouter({
  routes})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')