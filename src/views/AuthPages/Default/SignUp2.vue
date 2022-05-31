<template>
  <div>
    <h1 class="mb-0 text-center">Sign Up</h1>
    <p class="text-center text-dark">We have sent an OTP on your number.</p>
        <sign-up2-form formType="jwt"></sign-up2-form>
  </div>
</template>
<script>

import SignUp2Form from './Forms/SignUp2Form'

export default {
  name: 'SignUp2',
  components: { SignUp2Form },
  data: () => ({}),
  methods: {
  }
}
</script>
