import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import messagePlugin from "./common/message.plugin";
import Loader from "./components/app/Loader";
import * as VueGoogleMaps from "vue2-google-maps";
import GmapMap from "vue2-google-maps/src/components/map";
import GmapMarker from "vue2-google-maps/src/components/marker";

import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.component("Loader", Loader);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBhIGTTg7jnR1bxngnShl0HAYFrR8bGz18"
  },
  installComponents: false
});
// Vue.component("google-map", VueGoogleMaps.Map);
// Vue.component("google-marker", VueGoogleMaps.Map);
Vue.component("GmapMap", GmapMap);
Vue.component("GmapMarker", GmapMarker);

firebase.initializeApp({
  apiKey: "AIzaSyC1E7BPaIjn0RRha7e6Iq_2T6lYLEMbMOM",
  authDomain: "trip-diary-df90d.firebaseapp.com",
  projectId: "trip-diary-df90d",
  storageBucket: "trip-diary-df90d.appspot.com",
  messagingSenderId: "897244184817",
  appId: "1:897244184817:web:ad7a6466b67c43db79e950"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
