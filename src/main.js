import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouer from 'vue-router'

import dashboard from 'components/dashboard/dashboard'
import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


// Vue.component(DatePicker.name, DatePicker)
Vue.use(VueRouer)
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  state: {
    count: 0,
    color: ['#325B69', '#698570', '#AE5548', '#6D9EA8', '#9CC2B0', '#C98769']
  }
});
const router = new VueRouer({
  routes: [{
    path: '/login',
    component: Login,
    name: '',
    hidden: true
  },
  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  }, {
    path: '/dashboard',
    component: dashboard
  }]
})
new Vue({
  router,
  store,
  template: '<App>',
  components: {
    App
  },
  data: {
    eventHub: new Vue(),
    charts: []
  }
}).$mount('#app')

router.push('login')
