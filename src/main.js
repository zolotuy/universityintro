import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import * as VueGoogleMaps from 'vue2-google-maps'
import router from './router'
import VueResource from 'vue-resource';
import store from './store';


Vue.config.productionTip = false

Vue.use(VueResource)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAioUP4OTjV4g_NPbh6TKdMbhyuOAgBZTc',
    libraries: 'places',
  },
})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
