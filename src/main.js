import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import App from './App.vue'
import post1 from './components/Post.vue'
import ViewTable from './components/ViewTable.vue'
import Hello from './components/Hello.vue'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
 routes: [
   {
     path: '/',
     name:'home',
     component: Hello,
   },
/*
   {
     path: '/post/:id',
     name:'post1',
     component: post1,
     props: true,
   },
*/
   {
     path: '/viewTable/:id',
     name:'viewTable',
     component: ViewTable,
     props: true,
   },
 ],
  mode: 'history'
})

new Vue({
 el: '#app',
 render: h => h(App),
 router
})