<template>
  <div>
    <h1 class="mb-0">Reset Password</h1>
    <p>Enter your email address and we'll send you an email with instructions to reset your password.</p>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <form class="mt-4" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider vid="email" name="Email" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <input type="email" v-model="formData.email" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="email" aria-describedby="emailHelp" placeholder="Email Address">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <div class="d-inline-block w-100" style="display:flex !important;justify-content:center">
        <VueLoadingButton
          class="btn btn-primary float-right loading-btn"
          aria-label="Post message"
          @click.native="onSubmit"
          :loading="isLoading"
          styled
        >Reset Password</VueLoadingButton>
      </div>
    </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import api from '../../../Utils/api'
import { findash } from '../../../config/pluginInit'
import VueLoadingButton from "vue-loading-button";

export default {
  name: 'RecoverPassword1',
  props: ['formType'],
  mounted () {
    findash.index()
  },
  components: {
    VueLoadingButton
  },
  computed: {
    ...mapGetters({
      stateUsers: 'Setting/usersState'
    })
  },
  data: () => ({
    isLoading: false,
    formData: {
      email: ''
    }
  }),
  methods: {
    onSubmit () {
      this.isLoading = true;
      api.post('forget-password', { data: this.formData }).then(res => {
        if (res.data && res.data.data) {
          findash.showSnackbar('success', res.data && res.data.message)
          this.$store.dispatch(`Setting/addUserAction`, { user_id: res.data.data && res.data.data.id })
          this.$router.replace(`/reset-password`)
        }
      }).catch(error => {
        const Err = (error.response && error.response.data && error.response.data.error) || (error.response && error.response.data && error.response.data.message) || 'The Username/Password is Incorrect.';
        const user_id = (error.response && error.response.data && error.response.data.user_id) 
        if((Err == 'Your email is not submitted Please complete your registration.') && user_id){
          this.$store.dispatch(`Setting/addUserAction`, { user_id })
          this.$router.replace(`/auth/sign-up3`)
        } else if((Err == 'Your email is not verified.' || Err == 'Your email is not verified Please verify your email.') && user_id) {
            api.post('resend-email-otp', { data: { user_id: user_id.toString() }}).then(res => {
              findash.showSnackbar("success", res.data && res.data.message);
              this.$store.dispatch(`Setting/addUserAction`, { user_id })
              this.$router.replace(`/auth/sign-up4`)
            }).catch(error => {
              findash.showSnackbar('error', "Unable to send resend otp")
            })
        } else if(Err == 'Your phone number is not verified.' && user_id) {
          this.$store.dispatch(`Setting/addUserAction`, { user_id })
          this.$router.replace(`/auth/sign-up2`)
        }
        findash.showSnackbar('error', Err)
      }).finally(() => {
        this.isLoading = false
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
</style>