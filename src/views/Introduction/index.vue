<template>
  <div class="iq-comingsoon pt-5">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div
          class="col-sm-6"
          style="align-items: center; display: flex; justify-content: center"
        >
          <h1>
            Watch this video to <br />
            see how eFINOP works
          </h1>
        </div>
        <div class="col-sm-6 text-end">
          <youtube
            :video-id="videoId"
            ref="youtube"
            @playing="playing"
          ></youtube>
        </div>
      </div>
      <div class="row justify-content-center">
        <b-col lg="4" md="6" class="home-col">
          <b-row class="home-box">
            <b-col lg="12">
              <b-link class="iq-icons-list" href="/accounts">
                <div data-icon="J" class="icon home-icons"></div>
              </b-link>
            </b-col>
            <b-col lg="12">ADD FINOP SUPER ADMINISTRATOR</b-col>
          </b-row>
        </b-col>
        <b-col lg="4" md="6" class="home-col">
          <b-row class="home-box">
            <b-col lg="12">
              <b-link class="iq-icons-list" href="/accounts">
                <div data-icon="J" class="icon home-icons"></div>
              </b-link>
            </b-col>
            <b-col lg="12">USER PROFILE</b-col>
          </b-row>
        </b-col>
        <b-col lg="4" md="6" class="home-col">
          <b-row class="home-box">
            <b-col lg="12">
              <b-link class="iq-icons-list" href="/accounts">
                <div data-icon="J" class="icon home-icons"></div>
              </b-link>
            </b-col>
            <b-col lg="12">CONTACT US</b-col>
          </b-row>
        </b-col>
      </div>
    </div>
  </div>
</template>
<script>
import { findash } from "../../config/pluginInit";
import Vue from "vue";
import VueYoutube from "vue-youtube";

Vue.use(VueYoutube);

export default {
  name: "Introduction",
  mounted() {
    findash.index();
  },
  data: () => ({
    videoId: "lG0Ys-2d4MA",
  }),
  methods: {
    async playing(e) {
      console.log("video playign", e);
    },
  },
};
</script>

<style scoped>
.home-box {
  text-align: center;
  width: 70%;
  height: 198px;
  border: 5px solid #1f3d73;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  flex-direction: row;
  padding: 15px;
  font-size: 15px;
}

.home-col {
  display: flex;
  justify-content: center;
}

.home-icons {
  font-size: 72px !important;
  width: 55px !important;
  height: 48px !important;
}
</style>
