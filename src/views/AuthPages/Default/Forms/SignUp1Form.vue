<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit, invalid }">
    <form class="mt-4" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider vid="mobile" name="Mobile" rules="required" v-slot="{ errors }">
        <div class="form-group"> 
          <div style="display:flex">
            <div class="col-md-2" style="padding:0">
              <vue-country-code
              style="height:45px"
              @onSelect="onSelect"
              defaultCountry='us'
              :onlyCountries="['in', 'us']">
            </vue-country-code>
           </div>
           <div class="col-md-10" style="padding:0">
               <input type="number" v-model="formData.mobile_number" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="mobile" placeholder="Mobile Number">  
                  <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div> 
           </div>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="password" name="Password" :rules="{ required: true, regex: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/ }" v-slot="{ errors }">
        <div class="form-group">  
            <b-form-input type="password" autocomplete="new-password" v-model="formData.password" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="password" placeholder="Password">
                 </b-form-input> 
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
        
      </ValidationProvider>
      <ValidationProvider vid="repass" name="Repeat Password" :rules="{ required: true, regex: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,confirmed:formData.password}" v-slot="{ errors }">
        <div class="form-group">  
            <input type="password" v-model="formData.repassword" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="repassword" placeholder="Repeat Password" />
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>

      <ValidationProvider vid="super_admin" name="super_admin" rules="required">
        <div class="form-group"> 
          <div class="d-inline-block w-100">
            <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
              <input type="checkbox" v-model="formData.super_admin" class="custom-control-input" id="super_admin">
              <label class="custom-control-label" for="super_admin"> <a href="#">Are you super admin to manage this account?</a></label>
            </div>
          </div>
        </div>
      </ValidationProvider>
      

      <div class="d-inline-block w-100" style="display:flex !important;justify-content:center;margin-bottom:15px">
        <vue-recaptcha :sitekey="sitekey" :loadRecaptchaScript="true" @verify="validateCaptcha"></vue-recaptcha>
      </div>

      <div class="d-inline-block w-100" style="display:flex !important;justify-content:center;">
        <VueLoadingButton
          class="btn btn-primary loading-btn"
          aria-label="Post message"
          @click.native="onSubmit"
          :disabled="invalid || !formData.super_admin || !recaptcha"
          :loading="isLoading"
          styled
        >Send OTP</VueLoadingButton>
      </div>
      <div class="sign-info" style="display: flex;justify-content: center;color: black;">
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
import { mapGetters } from "vuex";
import api from "../../../../Utils/api";
import { findash } from "../../../../config/pluginInit";
import Vue from "vue";
import VueCountryCode from "vue-country-code-select";
import VueLoadingButton from "vue-loading-button";
import { VueRecaptcha } from 'vue-recaptcha';

Vue.use(VueCountryCode);

export default {
  name: "SignUp1Form",
  props: ["formType"],
  mounted() {
    findash.index();
  },
  computed: {
    ...mapGetters({
      users: "Setting/usersState",
    }),
  },
  components: {
    VueLoadingButton,
    VueRecaptcha
  },
  data: () => ({
    formData: {
      mobile_number: "",
      country_code: "",
      password: "",
      repassword: "",
      super_admin: true,
    },
    isLoading: false,
    sitekey: '6LcslMceAAAAACcF4Yf1Mk2LEKvHiJAc0iyZ3p4t',
    recaptcha: true
  }),
  methods: {
    async onSelect({ name, iso2, dialCode }) {
      this.formData.country_code = `+${dialCode}`;
    },
    async validateCaptcha (emit) {
      this.recaptcha = emit ? true : false;
    },
    async onSubmit() {
      var self = this;
      this.isLoading = true;
      let datas = { ...this.formData };
      if (datas.repassword) {
        delete datas.repassword;
      }
      api
        .post("sent-otp", { data: datas })
        .then((res) => {
          if (res.data && res.data.data) {
            findash.showSnackbar("success", res.data && res.data.message);
            this.$store.dispatch(`Setting/addUserAction`, res.data.data);
            this.$router.replace(`/auth/sign-up2`);
          } else {
            findash.showSnackbar("error", "User Data Not Found");
          }
        })
        .catch((error) => {
          const Err = (error.response && error.response.data && error.response.data.error && error.response.data.error.message) || (error.response && error.response.data && error.response.data.message) || "Unable to send the otp. Please try again later";
          findash.showSnackbar("error", Err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: "textfield";
}

.loading-btn {
  background: var(--iq-primary) !important;
  border-color: var(--iq-primary) !important;
  padding: 6px 12px 6px 12px !important;
}
</style>
