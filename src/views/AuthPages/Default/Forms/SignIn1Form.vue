<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit, invalid }">
    <form class="mt-4" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider vid="username" name="username" :rules="inputValidation.rules" v-slot="{ errors }">
        <div class="form-group"> 
          <div style="display:flex">
            <div v-if="inputValidation.enableCountryCode" class="col-md-2" style="padding:0">
              <vue-country-code
              style="height:45px"
              @onSelect="onSelect"
              defaultCountry='us'
              :onlyCountries="['in', 'us']">
            </vue-country-code>
           </div>
           <div :class="inputValidation.enableCountryCode ? 'col-md-10' : 'col-md-12'" style="padding:0">
               <input type="text" v-model="formData.username" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')" @input="handleChange"
                 id="username" placeholder="Enter Email/Mobile Number">  
                  <div class="invalid-feedback">
            <span>{{ inputValidation.errors }}</span>
          </div> 
           </div>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="password" name="Password" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="passwordInput">Password</label>
          <router-link to="/password-reset1" class="float-right">Forgot password?</router-link>
          <input
            type="password"
            autocomplete="new-password"
            :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
            id="passwordInput"
            v-model="formData.password"
            placeholder="Password"
            required
          />
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <div class="d-inline-block w-100">
        <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
          <input type="checkbox" class="custom-control-input" :id="formType" />
          <label class="custom-control-label" :for="formType" style="color:#1e3d73">Remember Me</label>
        </div>
        <VueLoadingButton
          class="btn btn-primary float-right loading-btn"
          aria-label="Post message"
          :disabled="invalid"
          @click.native="onSubmit"
          :loading="isLoading"
          styled
        >Sign in</VueLoadingButton>
      </div>
      <div class="sign-info" style="color: black">
        <span class="dark-color d-inline-block line-height-2">
          Don't have an account?
          <router-link
            to="/dark/auth/sign-up1"
            class="iq-waves-effect pr-4"
            v-if="$route.meta.dark"
          >Sign up</router-link>
          <router-link to="/auth/sign-up1" class="iq-waves-effect pr-4" v-else>Sign up</router-link>
        </span>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapGetters } from 'vuex'
import api, { setAuthToken } from '../../../../Utils/api'
import { findash } from '../../../../config/pluginInit'
import Vue from "vue";
import VueCountryCode from "vue-country-code-select";
import VueLoadingButton from "vue-loading-button";

Vue.use(VueCountryCode);

export default {
  name: 'SignIn1Form',
  props: ['formType', 'email', 'password'],
  data: () => ({
    isLoading: false,
    inputValidation: {
      enableCountryCode: false,
      rules: "required|email",
      errors: 'Email/Mobile Number is not valid'
    },
    formData: {
      password: '',
      username: ''
    }
  }),
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
  methods: {
    async onSelect({name, iso2, dialCode}) {
      this.formData.username = `+${dialCode}${this.formData.username.slice(-10)}`
    },
    async handleChange(e) {
      const val = e.target.value;
      if(val && parseInt(val) && val.length === 10){
        this.inputValidation.enableCountryCode = true;
        this.inputValidation.rules = "required";
      } else {
        this.inputValidation.enableCountryCode = false;
        this.inputValidation.rules = "required|email";
      }
    },
    async onSubmit () {
      this.isLoading = true;
      api.post('login', { data: this.formData }).then(res => {
        const apiData = res.data && res.data.data || []
        if(apiData && apiData.session && apiData.session.session){
          localStorage.setItem('session-key', apiData && apiData.session && apiData.session.session)
          this.$router.replace('/sign-in2')
        } else if(apiData && apiData.tokens) {
          this.$store.dispatch('Setting/authUserAction', {
            auth: true,
            user: apiData && apiData.user
          })
          localStorage.setItem('access_token', apiData && apiData.tokens && apiData.tokens.access_token || false)
          localStorage.setItem('refresh_token', apiData && apiData.tokens && apiData.tokens.refresh_token || false)
          setAuthToken(`Bearer ${apiData && apiData.tokens && apiData.tokens.access_token}`);
          this.$router.push({ name: 'app.intro' })
        }
   
      }).catch(error => {
        const Err = (error.response && error.response.data && error.response.data.error && error.response.data.error.message) || (error.response && error.response.data && error.response.data.message) || 'The Username/Password is Incorrect.';
        const user_id = (error.response && error.response.data && error.response.data.error && error.response.data.error.data && error.response.data.error.data.user_id) 
        
        if((Err == 'Your email is not submitted Please complete your registration') && user_id){
          this.$store.dispatch(`Setting/addUserAction`, { user_id })
          this.$router.replace(`/auth/sign-up3`)
        } else if((Err == 'Your email is not verified' || Err == 'Your email is not verified Please verify your email') && user_id) {
            api.post('resend-email-otp', { data: { user_id: user_id.toString() }}).then(res => {
              findash.showSnackbar("success", res.data && res.data.message);
              this.$store.dispatch(`Setting/addUserAction`, { user_id })
              this.$router.replace(`/auth/sign-up4`)
            }).catch(() => {
              findash.showSnackbar('error', "Unable to send resend otp")
            })
        } else if(Err && typeof Err === 'string' && Err.indexOf('Your phone number was not confirmed') > -1 && user_id) {
            api.post('resend-Mobile-otp', { data: Object.assign({}, { user_id }) }).then(res => {
              findash.showSnackbar('success', res.data && res.data.message)
              this.$store.dispatch(`Setting/addUserAction`, { user_id })
              this.$router.replace(`/auth/sign-up2`)
            }).catch(resendError => {
              const Err = (resendError.response && resendError.response.data && resendError.response.data.error) || (resendError.response && resendError.response.data && resendError.response.data.message) || 'Invalid OTP Code.';
              findash.showSnackbar('error', Err)
            })
        } else {
          findash.showSnackbar('error', Err)
        }
      }).finally(() => {
        setTimeout(() => {
            this.isLoading = false;
        }, 3000)
      })
    }
  }
}
</script>
<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: 'textfield';
}

.loading-btn {
  background: var(--iq-primary) !important;
    border-color: var(--iq-primary) !important;
    padding: 6px 12px 6px 12px !important;
}
</style>
