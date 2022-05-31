<template>
  <div>
    <h1 class="mb-0 text-center">Sign in</h1>
    <p class="text-center text-dark">Enter your mobile OTP to access admin panel.</p>
        <sign-in2-form formType="jwt"></sign-in2-form>
  </div>
</template>

<script>
import SignIn2Form from './Forms/SignIn2Form'

export default {
  name: 'SignIn2',
  components: { SignIn2Form },
  data: () => ({}),
  mounted () {
    const loggedIn = localStorage.getItem('access_token')
    if (loggedIn !== undefined && loggedIn !== null) {
      this.$router.push({ name: 'mini.dashboard.home-2' })
    }
  }
}
</script>
