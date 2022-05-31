<template>
  <div>
    <h1 class="mb-0 text-center">Set Password</h1>
    <p class="text-center text-dark">We have sent an OTP on your email address.</p>
        <reset-password-form formType="jwt"></reset-password-form>
  </div>
</template>
<script>

import ResetPasswordForm from './Forms/ResetPasswordForm'

export default {
  name: 'ResetPassword',
  components: { ResetPasswordForm },
  data: () => ({}),
  methods: {
  }
}
</script>
