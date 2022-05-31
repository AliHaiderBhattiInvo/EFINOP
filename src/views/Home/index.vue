<template>
  <b-row>
    <b-col lg="12">
      <b-row style="display:flex;justify-content:center;">
        <h1 style="color:#1F3D73">Home Menu</h1>
      </b-row>
    </b-col>
    <b-col lg="1" />
    <b-col lg="10">
      <b-row>
        <b-col lg="4" md="6" class="home-col">
          <b-row class="home-box">
            <b-col lg="12">
              <b-link class="iq-icons-list" href="/accounts">
                <div data-icon="J" class="icon home-icons"></div>
              </b-link>
            </b-col>
            <b-col lg="12">CHART OF ACCOUNTS</b-col>
          </b-row>
        </b-col>
        <b-col lg="4" md="6" class="home-col">
          <b-row class="home-box">
            <b-col lg="12">
              <b-link class="iq-icons-list" href="/import">
                <div data-icon="J" class="icon home-icons"></div>
              </b-link>
            </b-col>
            <b-col lg="12">TRIAL BALANCE IMPORT</b-col>
          </b-row>
        </b-col>
        <b-col lg="4" md="6" class="home-col">
          <b-row class="home-box">
            <b-col lg="12">
              <b-link class="iq-icons-list" href="/inventory">
                <div data-icon="J" class="icon home-icons"></div>
              </b-link>
            </b-col>
            <b-col lg="12">INVENTORY</b-col>
          </b-row>
        </b-col>
        <b-col lg="4" md="6" class="home-col">
          <b-row class="home-box">
            <b-col lg="12">
              <b-link class="iq-icons-list" href="/reports">
                <div data-icon="J" class="icon home-icons"></div>
              </b-link>
            </b-col>
            <b-col lg="12">REPORTS</b-col>
          </b-row>
        </b-col>
        <b-col lg="4" md="6" class="home-col">
          <b-row class="home-box">
            <b-col lg="12">
              <b-link class="iq-icons-list" href="/reportDetails">
                <div data-icon="J" class="icon home-icons"></div>
              </b-link>
            </b-col>
            <b-col lg="12">REPORT DETAILS</b-col>
          </b-row>
        </b-col>
         <b-col lg="4" md="6" class="home-col">
          <b-row class="home-box">
            <b-col lg="12">
              <b-link class="iq-icons-list" href="/export">
                <div data-icon="[" class="icon home-icons"></div>
              </b-link>
            </b-col>
            <b-col lg="12">EXPORT</b-col>
          </b-row>
        </b-col>
         <b-col lg="4" md="6" class="home-col">
          <b-row class="home-box">
            <b-col lg="12">
              <b-link class="iq-icons-list" href="/settings">
                <div data-icon="~" class="icon home-icons"></div>
              </b-link>
            </b-col>
            <b-col lg="12">SETTINGS</b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-col>
    <b-col lg="1" />
  </b-row>
</template>
<script>
import { findash } from '../../config/pluginInit'

export default {
  name: 'Home',
  mounted () {
    findash.index()
  }
}
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
