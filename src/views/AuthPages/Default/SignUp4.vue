<template>
  <div>
    <h1 class="mb-0 text-center">Sign Up</h1>
    <p class="text-center text-dark">We have sent an OTP on your email address.</p>
        <sign-up4-form formType="jwt"></sign-up4-form>
  </div>
</template>
<script>

import SignUp4Form from './Forms/SignUp4Form'

export default {
  name: 'SignUp4',
  components: { SignUp4Form },
  data: () => ({}),
  methods: {
  }
}
</script>
