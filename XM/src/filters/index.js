import Vue from "vue";

import zero from "./filterZero";
import date from "./filterDate";

Vue.filter('date',date)
Vue.filter('zero',zero)
