import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home'
Vue.use(Router)

//export default new Router({
//routes: [
//  {
//    path: '/',
//    name: 'Hello',
//    component: HelloWorld
//  },{
//  	  path:'/home',
//  	  name:'home',
//  	  component:home
//  }
//]
//})
var routes = [{
	path: '/',
	component: resolve => require(['../views/home.vue'], resolve)
}]

var router = new Router({
	mode: 'history',
	hashbang: true,
	history: true,
	saveScrollPosition: true,
	suppressTransitionError: true,
	linkActiveClass: "myactive",
	routes: routes
})

export default router;