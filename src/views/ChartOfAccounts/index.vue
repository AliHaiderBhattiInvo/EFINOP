<template>
  <div id="coa-page">
    <transition
      name="router-anim"
      :enter-active-class="`animated ${animated.enter}`"
      mode="out-in"
      :leave-active-class="`animated ${animated.exit}`"
    >
      <router-view />
    </transition>
  </div>
</template>
<script>
import { findash } from "../../config/pluginInit";

export default {
  name: "COA",
  data: () => ({
    animated: { enter: "zoomIn", exit: "zoomOut" },
  }),
  mounted() {
    findash.index();
  },
};
</script>
