import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";


Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCYiKglg3x3b20eu4KX3-0AmtjHG0I9HS8",
  authDomain: "praktos-bk.firebaseapp.com",
  databaseURL: "https://praktos-bk-default-rtdb.firebaseio.com",
  projectId: "praktos-bk",
  storageBucket: "praktos-bk.appspot.com",
  messagingSenderId: "755393585200",
  appId: "1:755393585200:web:6667418f388fb04039cdf5",
  measurementId: "G-Y1VEW9KQ0P"
};

firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
