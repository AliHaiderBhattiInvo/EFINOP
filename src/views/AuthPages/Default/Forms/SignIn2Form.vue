<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit, invalid }">
    <form class="mt-4" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider vid="code" name="Code" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="code">OTP</label>
          <input type="text" v-model="formData.code" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="code" placeholder="Mobile OTP">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <div class="d-inline-block w-100" style="display:flex !important;justify-content:center;align-items:center">
        <VueLoadingButton
          class="btn btn-primary loading-btn"
          aria-label="Post message"
          @click.native="onSubmit"
          :disabled="invalid"
          :loading="isLoading"
          styled
        >Submit</VueLoadingButton>
        </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapGetters } from 'vuex'
import api, { setAuthToken } from '../../../../Utils/api'
import { findash } from '../../../../config/pluginInit'
import Vue from 'vue'
import VueLoadingButton from "vue-loading-button";
import vueAwesomeCountdown from 'vue-awesome-countdown';

Vue.use(vueAwesomeCountdown, 'vac')

export default {
  name: 'SignIn2Form',
  props: ['formType'],
  mounted () {
    findash.index()
  },
  computed: {
    ...mapGetters({
      users: 'Setting/usersState'
    })
  },
  components: {
    VueLoadingButton
  },
  data: () => ({
    isLoading: false,
    formData: {
      code: '',
      session: ''
    }
  }),
  methods: {
    async onSubmit () {
      this.isLoading = true;
      api.post('response-mfa-challenge', { data: Object.assign({}, this.formData, { session: localStorage.getItem('session-key') || '' }) }).then(res => {
        const apiData = res && res.data && res.data.data || {}
        this.$store.dispatch('Setting/authUserAction', {
          auth: true,
          user: (apiData && apiData.user_data && apiData.user_data) || {}
        })
        localStorage.setItem('access_token', apiData && apiData.tokens && apiData.tokens.access_token || false)
        localStorage.setItem('refresh_token', apiData && apiData.tokens && apiData.tokens.refresh_token || false)
        setAuthToken(`Bearer ${apiData && apiData.tokens && apiData.tokens.access_token}`);
        this.$router.push({ name: 'app.intro' })
      }).catch(error => {
        const Err = (error.response && error.response.data && error.response.data.error && error.response.data.error.message) || (error.response && error.response.data && error.response.data.message) || 'Invalid OTP Code.';
        findash.showSnackbar('error', Err)
      }).finally(() => {
        this.isLoading = false
        localStorage.removeItem('session-key')
      })
    }
  }
}
</script>
<style>
.loading-btn {
  background: var(--iq-primary) !important;
    border-color: var(--iq-primary) !important;
    padding: 6px 12px 6px 12px !important;
}

.resend-otp-span {
    color: #1e3d73;
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;
}
</style>
