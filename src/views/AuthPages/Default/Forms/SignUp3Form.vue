<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit, invalid }">
    <form class="mt-4" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider vid="firstName" name="First Name" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <input type="text" v-model="formData.firstName" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="firstName" placeholder="First Name">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
     <ValidationProvider vid="middleName" name="Middle Name" v-slot="{ errors }">
        <div class="form-group">
          <input type="text" v-model="formData.middleName" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="middleName" placeholder="Middle Name">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="lastName" name="Last Name" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <input type="text" v-model="formData.lastName" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="lastName" placeholder="Last Name">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="companyName" name="Company Name" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <input type="text" v-model="formData.companyName" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="companyName" placeholder="Company Name">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="userTitle" name="User Title" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <input type="text" v-model="formData.userTitle" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="userTitle" placeholder="User Title">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <!-- <ValidationProvider vid="company_address" name="Company Address" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <input type="text" v-model="formData.company_address" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="company_address" placeholder="Company Address">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider> -->
      <ValidationProvider vid="domain" name="Domain" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <input type="text" v-model="formData.domain" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="domain" placeholder="Domain">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="emailAddress" name="Email Address" rules="required|email" v-slot="{ errors }">
        <div class="form-group">
          <input type="email" v-model="formData.emailAddress" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="emailAddress" aria-describedby="emailHelp" placeholder="Email Address">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="crdNumber" name="CRD Number" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <input type="text" v-model="formData.crdNumber" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="crdNumber" placeholder="CRD Number">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <!-- <div class="d-inline-block w-100">
        <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
          <input type="checkbox" class="custom-control-input" :id="formType">
          <label class="custom-control-label" :for="formType"> <a style="position: relative;top:-13px;font-style:italic" href="#">Are you the Firm's FINOP registered with FINRA as the responsible principle for reporting?</a></label>
        </div>
      </div> -->
      <div style="display:flex !important;justify-content:center;margin-top:15px;">
        <VueLoadingButton
          class="btn btn-primary loading-btn"
          aria-label="Post message"
          @click.native="onSubmit"
          :disabled="invalid"
          :loading="isLoading"
          styled
        >Create Account</VueLoadingButton>
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
      id: "",
      emailAddress: "",
      firstName: "",
      middleName: "",
      lastName: "",
      companyName: "",
      userTitle: "",
      domain: "",
      crdNumber:""
    }
  }),
  methods: {
    async onSubmit () {
      this.isLoading = true
      const usersState = (this.$store.getters['Setting/usersState'] && this.$store.getters['Setting/usersState'].length > 0 && this.$store.getters['Setting/usersState'][this.$store.getters['Setting/usersState'].length -1]) || {}
      api.post('register-user', { data: Object.assign({}, this.formData, { id: (usersState && usersState.user_id) || '' }) }).then(res => {
        findash.showSnackbar('success', res.data && res.data.message)
        this.$router.replace(`/auth/sign-up4`)
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
