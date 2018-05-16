import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes : [
        {name:'url', path:'/url'},
        {name:'mobile', path:'/mobile'},
        {name:'phone',path:'/phone'},
        {path:'*', redirect:'/url'}
    ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


