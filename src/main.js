import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Users from './Users.vue'
import Home from './components/Home.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faLinkedin);
library.add(faGithub);
library.add(faUserSecret);
Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/users', component: Users },
  { path: '/', component: Home},
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
