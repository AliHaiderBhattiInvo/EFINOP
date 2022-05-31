<template>
  <div>
    <Loader />
    <section class="sign-in-page"> 
      <b-container class="p-0">
        <b-row class="no-gutters height-self-center">
          <b-col sm="12" class="align-self-center bg-primary rounded">
            <b-row class="m-0">
              <b-col md="5" class="bg-white sign-in-page-data">
                <div class="sign-in-from">
                  <router-view></router-view>
                </div>
              </b-col>
              <b-col md="7" class="text-center sign-in-page-image">
                <div class="sign-in-detail text-white pt-5">
                  <a class="sign-in-logo mb-5" href="#">
                    <img :src="logo" class="img-fluid" alt="logo" />
                    <span style="color: white;font-weight:bold;text-transform: uppercase;fontSize: 20px;margin-left: 15px">Efinop</span>
                  </a>
                  <Slick :option="slickOptions">
                    <div class="item">
                      <img
                        :src="require('../assets/images/login/login-1.png')"
                        class="img-fluid mb-4"
                        alt="logo"
                      />
                      <h4 class="mb-1 text-white">Manage your orders</h4>
                      <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                    <div class="item">
                      <img
                        :src="require('../assets/images/login/login-1.png')"
                        class="img-fluid mb-4"
                        alt="logo"
                      />
                      <h4 class="mb-1 text-white">Manage your orders</h4>
                      <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                    <div class="item">
                      <img
                        :src="require('../assets/images/login/login-1.png')"
                        class="img-fluid mb-4"
                        alt="logo"
                      />
                      <h4 class="mb-1 text-white">Manage your orders</h4>
                      <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                  </Slick>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
import Loader from '../components/findash/loader/Loader'
import logo from '../assets/images/efinop-logo.png'
import { findash } from '../config/pluginInit'
import bgImage from '../assets/images/login/login-2.jpg'
export default {
  name: 'AuthLayout1',
  components: {
    Loader
  },
  mounted () {
    findash.index()
  },
  data () {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: false
      },
      logo: logo,
      bgImageURL: bgImage
    }
  }
}
</script>
