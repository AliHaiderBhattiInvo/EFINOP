<template>
  <div>
    <h1 class="mb-0 text-center">Sign Up</h1>
    <p class="text-center text-dark">Please fill the details below.</p>
        <register-invite-form formType="jwt"></register-invite-form>
  </div>
</template>
<script>

import RegisterInviteForm from './Forms/RegisterInviteForm.vue'

export default {
  name: 'RegisterInvite',
  components: { RegisterInviteForm },
  data: () => ({}),
  methods: {
  }
}
</script>
