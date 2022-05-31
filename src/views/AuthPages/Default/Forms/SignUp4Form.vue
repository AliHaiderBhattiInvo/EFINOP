<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit, invalid }">
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
      <div style="display:flex !important;justify-content:center;margin-top:15px;">
        <VueLoadingButton
          class="btn btn-primary loading-btn"
          aria-label="Post message"
          @click.native="onSubmit"
          :disabled="invalid"
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
  name: 'SignUp1Form',
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
      password: '',
      is_phone_number:false
    }
  }),
  methods: {
    async onSubmit () {
      this.isLoading = true;
      const usersState = (this.$store.getters['Setting/usersState'] && this.$store.getters['Setting/usersState'].length > 0 && this.$store.getters['Setting/usersState'][this.$store.getters['Setting/usersState'].length -1]) || {}
      api.post('verify-otp', { data: Object.assign({}, this.formData, { user_id: (usersState && usersState.user_id) || '' }) }).then(res => {
        findash.showSnackbar('success', res.data && res.data.message)
        this.$router.replace(`/sign-in1`)
      }).catch(error => {
        const Err = (error.response && error.response.data && error.response.data.error && error.response.data.error.message) || (error.response && error.response.data && error.response.data.message) || 'Please provide the correct details.';
        findash.showSnackbar('error', Err)
      }).finally(() => {
        this.isLoading = false;
      })
    }
  }
}
</script>
