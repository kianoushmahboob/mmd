import Vue from 'vue'
import * as VueGoogleMaps from "vue2-google-maps";
import Snotify from 'vue-snotify';
// Toaster
Vue.use(Snotify, {
    toast: {
        timeout: 5000,
        showProgressBar: false,
        position: 'rightBottom'
    }
})
import 'vue-snotify/styles/material.css';


Vue.use(VueGoogleMaps, {
    load: {
      key: "AIzaSyBFW-Rlc0JKVUH8ose8eYttg6399_n9-24",
    },
    installComponents: true,
  });
