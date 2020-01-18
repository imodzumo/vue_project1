import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

var VueRouter = require('vue-router');

var Catalog = require('./components/Catalog');
var Products = require('./components/Products');
var Clients = require('./components/Clients');

Vue.use(VueRouter);
var router = new VueRouter ({
  routes: [
    {path:'/catalog', component: Catalog },
    {path:'/products', component: Products },
    {path:'/clients', component: Clients }
  ]
});









Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
  el: '#app',
  router: router
});
