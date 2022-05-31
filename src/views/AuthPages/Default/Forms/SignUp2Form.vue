<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit, invalid }">
    <form class="mt-4" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider vid="otp" name="OTP" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="otp">OTP</label>
          <input type="text" v-model="formData.otp" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="otp" placeholder="Mobile OTP">
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
        <div style="color: black;margin-left:10px">
          <vac :end-time="new Date().getTime() + 20000">
            <span
              slot="process"
              slot-scope="{ timeObj }">{{ `${timeObj.m}:${timeObj.s}` }}</span>
            <span class="resend-otp-span" slot="finish" @click="handleResendOTP">Resend OTP</span>
          </vac>
        </div>
      </div>
      <div class="sign-info" style="display:flex;justify-content:center;color:black">
          <span class="dark-color d-inline-block line-height-2">
            Already Have Account ?
              <router-link to="/dark/sign-in1" class="iq-waves-effect pr-4" v-if="$route.meta.dark">
                Sign in
              </router-link>
            <router-link to="/sign-in1" class="iq-waves-effect pr-4" v-else>
                Sign in
              </router-link>
          </span>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '../../../../Utils/api'
import { findash } from '../../../../config/pluginInit'
import Vue from 'vue'
import VueLoadingButton from "vue-loading-button";
import vueAwesomeCountdown from 'vue-awesome-countdown';

Vue.use(vueAwesomeCountdown, 'vac')

export default {
  name: 'Otp1Form',
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
      otp: '',
      is_phone_number: true
    }
  }),
  methods: {
    async onSubmit () {
      this.isLoading = true;
      const usersState = (this.$store.getters['Setting/usersState'] && this.$store.getters['Setting/usersState'].length > 0 && this.$store.getters['Setting/usersState'][this.$store.getters['Setting/usersState'].length -1]) || {}
      api.post('verify-otp', { data: Object.assign({}, this.formData, { user_id: (usersState && usersState.user_id) || '' }) }).then(res => {
        findash.showSnackbar('success', res.data && res.data.message)
        if(usersState && usersState.redirect){
          this.$router.replace(`/sign-in1`)
        } else {
          this.$router.replace(`/auth/sign-up3`)
        }
      }).catch(error => {
        const Err = (error.response && error.response.data && error.response.data.error && error.response.data.error.message) || (error.response && error.response.data && error.response.data.message) || 'Invalid OTP Code.';
        findash.showSnackbar('error', Err)
      }).finally(() => {
        this.isLoading = false
      })
    },
    async handleResendOTP () {
      const usersState = (this.$store.getters['Setting/usersState'] && this.$store.getters['Setting/usersState'].length > 0 && this.$store.getters['Setting/usersState'][this.$store.getters['Setting/usersState'].length -1]) || {}
      api.post('resend-Mobile-otp', { data: Object.assign({}, { user_id: (usersState && usersState.user_id) || '' }) }).then(res => {
        findash.showSnackbar('success', res.data && res.data.message)
      }).catch(error => {
        const Err = (error.response && error.response.data && error.response.data.error) || (error.response && error.response.data && error.response.data.message) || 'Invalid OTP Code.';
        findash.showSnackbar('error', Err)
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
