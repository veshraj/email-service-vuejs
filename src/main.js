import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import "./assets/style.css";
import "bootstrap/dist/css/bootstrap.css"

Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!store.getters.token) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      })
    }
    else {
      next();
    }
  }
  else if(to.matched.some(record => record.meta.requiresVisitor)){
    if(store.getters.token) {
      next({
        path: "/",
        query: { redirect: to.fullPath}
      })
    }
    else {
      next()
    }
  }
  else {
    next();
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
