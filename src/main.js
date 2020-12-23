import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import VueSplide from '@splidejs/vue-splide';
import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueMoment from 'vue-moment';



Vue.use(BootstrapVue);
Vue.use( VueSplide );
Vue.use(VueMoment)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
