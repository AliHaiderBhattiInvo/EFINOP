<template>
  <div>
    <h1 class="mb-0 text-center">Sign Up</h1>
    <p class="text-center text-dark">Please fill the details below.</p>
        <sign-up3-form formType="jwt"></sign-up3-form>
  </div>
</template>
<script>

import SignUp3Form from './Forms/SignUp3Form'

export default {
  name: 'SignUp3',
  components: { SignUp3Form },
  data: () => ({}),
  methods: {
  }
}
</script>
