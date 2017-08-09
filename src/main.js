// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VRouter from 'vue-router'
import App from './app'
import Layout from './components/layout'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'

Vue.use(VRouter)
Vue.config.productionTip = false

let router = new VRouter({
	mode:'history',
	routes: [
		{
			path: '/',
			component: IndexPage
		},
		{
			path: '/index:type',
			component: IndexPage
		},
		{
			path: '/detail',
			component: DetailPage
		},
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//router: router的简写
  template: '<App/>',
  components: { App }
})
