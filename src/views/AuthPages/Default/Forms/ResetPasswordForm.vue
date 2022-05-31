<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <form class="mt-4" novalidate @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider vid="otp" name="OTP" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="otp">OTP</label>
          <input type="text" v-model="formData.otp" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="otp" placeholder="Email OTP">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
    <ValidationProvider vid="new_password" name="Password" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="new_password">Password</label>
          <input
            type="password"
            :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
            id="new_password"
            v-model="formData.new_password"
            placeholder="Password"
            required
          />
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
          <ValidationProvider vid="confirm_password" name="Confirm Password" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="confirm_password">Password</label>
          <input
            type="password"
            autocomplete="new-password"
            :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
            id="confirm_password"
            v-model="formData.confirm_password"
            placeholder="Confirm Password"
            required
          />
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <div style="display:flex !important;justify-content:center;margin-top:15px;">
        <VueLoadingButton
          class="btn btn-primary loading-btn"
          aria-label="Post message"
          @click.native="onSubmit"
          :loading="isLoading"
          styled
        >Submit Password</VueLoadingButton>
      </div>
      <div class="sign-info" style="position:relative;left:-15px">
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
import VueLoadingButton from "vue-loading-button";

export default {
  name: 'ResetPasswordForm',
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
      new_password: '',
      confirm_password: ''
    }
  }),
  methods: {
    async onSubmit () {
      this.isLoading = true;
      const { new_password, confirm_password, otp } = this.formData;
      if(new_password.toString() !== confirm_password.toString()) {
          this.isLoading = false;
          findash.showSnackbar('error', 'The Password and Confirm Password should be same.');
          return false;
      }

      const usersState = (this.$store.getters['Setting/usersState'] && this.$store.getters['Setting/usersState'].length > 0 && this.$store.getters['Setting/usersState'][1]) || {}
      api.post('reset-password', { data: Object.assign({}, { otp, new_password, id: (usersState && usersState.user_id) || '' }) }).then(res => {
        findash.showSnackbar('success', res.data && res.data.message)
        this.$router.replace(`/sign-in1`)
      }).catch(error => {
        const Err = (error.response && error.response.data && error.response.data.error && error.response.data.error.message) || (error.response && error.response.data && error.response.data.message) || 'Email Verification Failed.'
        findash.showSnackbar('error', Err)
      }).finally(() => {
        this.isLoading = false;
      })
    }
  }
}
</script>
