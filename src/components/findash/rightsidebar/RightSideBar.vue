<template>
  <!-- Right Sidebar Panel Start-->
  <div :class="`iq-colorbox color-fix `+miniClass">
    <slot name="icon" v-if="hasIconSlot" />
    <slot />
  </div>
  <!-- Right Sidebar Panel End-->
</template>
<script>
export default {
  name: 'RightSideBarStyle1',
  data () {
    return {
      rightSideBarMini: false,
      miniClass: ''
    }
  },
  props: {
    toggleClass: { type: String, default: '' }
  },
  computed: {
    hasIconSlot () {
      return !!this.$slots.icon
    },
    hasOpenIconSlot () {
      return !!this.$slots.openIcon
    },
    hasCloseIconSlot () {
      return !!this.$slots.closeIcon
    }
  },
  methods: {
    toggleMini () {
      this.rightSideBarMini = !this.rightSideBarMini
      this.checkRightSideBar()
    },
    checkRightSideBar () {
      if (this.rightSideBarMini) {
        this.miniClass = ''
      } else {
        this.miniClass = ''
      }
    }
  }
}
</script>
