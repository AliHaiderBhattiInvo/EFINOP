import * as rules from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import Vue from 'vue'

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})
extend("confirmed", {
  validate(value,{confirmed}) {
    return value == confirmed
  },
  params: ["confirmed"],
  message: "Repeat password should be match with password"
});
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
