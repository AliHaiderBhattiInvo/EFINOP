<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit, invalid }">
    <form class="mt-4" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider vid="first_name" name="First Name" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <input type="text" v-model="formData.first_name" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="first_name" placeholder="First Name">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
     <ValidationProvider vid="middle_name" name="Middle Name" v-slot="{ errors }">
        <div class="form-group">
          <input type="text" v-model="formData.middle_name" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="middle_name" placeholder="Middle Name">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="last_name" name="Last Name" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <input type="text" v-model="formData.last_name" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="last_name" placeholder="Last Name">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="user_title" name="User Title" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <input type="text" v-model="formData.user_title" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="user_title" placeholder="User Title">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
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
      <ValidationProvider vid="phone_number" name="Mobile" rules="required" v-slot="{ errors }">
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
               <input type="number" v-model="formData.phone_number" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="phone_number" placeholder="Mobile Number">  
                  <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div> 
           </div>
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
        >Register</VueLoadingButton>
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
  name: 'RegisterInviteForm',
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
      first_name: "",
      middle_name: "",
      last_name: "",
      user_title: "",
      password: "",
      repassword:"",
      phone_number:"",
      token: "",
      dialCode: ""
    }
  }),
  methods: {
    async onSelect({name, iso2, dialCode}) {
      this.formData.dialCode = `+${dialCode}`;
    },
    async onSubmit () {
      this.isLoading = true
      const token = this.$route.query && this.$route.query.token || '';
      const submitData = Object.assign({}, this.formData, { token, phone_number: `${this.formData.dialCode}${this.formData.phone_number}`  })
      delete submitData.repassword
      delete submitData.dialCode
      api.post('register-invite', { data: submitData }).then(res => {
        findash.showSnackbar('success', res.data && res.data.message)
        this.$store.dispatch(`Setting/addUserAction`, Object.assign({}, res.data.data, { redirect: true }));
        this.$router.replace(`/auth/sign-up2`)
      }).catch(error => {
        const Err = (error.response && error.response.data && error.response.data.error && error.response.data.error.message) || (error.response && error.response.data && error.response.data.message) || 'Please provide the correct details.';
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
