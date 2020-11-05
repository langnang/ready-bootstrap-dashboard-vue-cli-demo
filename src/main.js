import Vue from "vue";
// import App from "./App.vue";
// import router from "./routes";
// import store from "./store";
import particlesData from "./particles.json";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/nuiitofont.css";
import "./assets/css/ready.css";
import "./assets/css/demo.css";
import "./plugins/axios";
import "./plugins/fontawesome";

import "./plugins/element";
import "./plugins/vue-wechat-title";
import "particles.js";
import "jquery";
import "popper.js";
import "bootstrap";

import Layout from "./components/layout/Layout";

Vue.config.productionTip = false;

Vue.prototype.$goRoute = function (index) {
  this.$router.push(index);
};

new Vue({
  render: (h) => h(Layout),
}).$mount("#app");

window.particlesJS("app", particlesData);
