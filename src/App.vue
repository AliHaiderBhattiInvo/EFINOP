<template>
  <router-view />
</template>
<script>
import { findash } from "./config/pluginInit";

export default {
  name: "App",
  components: {},
  mounted() {
    findash.mainIndex();
  },
};
</script>
<style lang="scss">
@import "assets/scss/style.scss";
</style>
