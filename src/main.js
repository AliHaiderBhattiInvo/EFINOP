import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'mutationobserver-shim'
import './Utils/fliter'
import App from './App.vue'
import router from './router'
import store from './store'
import Raphael from 'raphael/raphael'
import './plugins'
import './registerServiceWorker'
import AlgoliaComponents from 'vue-instantsearch'
import i18n from './i18n'
import api, { setAuthToken } from './Utils/api'

global.Raphael = Raphael

Vue.use(AlgoliaComponents)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const authChildRoutes = ["/sign-in1", "/sign-in2", "/auth/sign-up1", "/auth/sign-up2", "/auth/sign-up3", "/auth/sign-up4", "/register-invite"];

let vm = new Vue({
  beforeMount: async function () {
    //await this.session();
    if (this.$route && this.$route.path !== '/' && !authChildRoutes.includes(this.$route.path)) {
      this.$router.replace('/')
    }
  },
  router,
  store,
  i18n,
  watch: {
    '$route': async function (to, from) {
      await this.session();
    }
  },
  methods: {
    async clearSession () {
      localStorage.clear();
      delete api.defaults.headers.common['Authorization'];
      this.$router.replace(`/sign-in1`);
    },
    async session() {
      const access_token = localStorage.access_token;

      if (access_token) {
        try {
          setAuthToken(`Bearer ${localStorage.getItem("access_token")}`);

          await api
            .get("/me")
            .then((res) => {
              if (res && res.data && res.data.data && res.data.data.user) {
                this.$store.dispatch("Setting/authUserAction", {
                  auth: true,
                  user: res && res.data && res.data.data && res.data.data.user,
                });
              } else {
                this.clearSession()
              }

            })
            .catch((Err) => {
              this.clearSession();
            });
        } catch (Err) {
          this.clearSession();
        }
      }
    }
  },
  render: h => h(App)
}).$mount('#app')

window.vm = vm
