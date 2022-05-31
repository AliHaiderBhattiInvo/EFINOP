<template>
  <div>
    <div v-if="sessionLoader">Loading...</div>
    <div v-if="!sessionLoader">
      <div id="show-overlay"></div>
      <Loader />
      <RightSideBar toggleClass="top-50 setting-toggle iq-card">
        <!-- <div class="buy-button">
        <a class="color-full" href="#">
          <i class="fa fa-spinner fa-spin font-size-18 text-primary" slot="icon" />
        </a>
      </div> -->
        <div id="right-sidebar-scrollbar" class="iq-colorbox-inner">
          <div class="clearfix color-picker">
            <h3 class="iq-font-black">FinDash Awesome Color</h3>
            <p>
              This color combo available inside whole template. You can change
              on your wish, Even you can create your own with limitless
              possibilities!
            </p>
            <ul class="iq-colorselect clearfix">
              <li
                v-for="(item, index) in colors"
                :key="index"
                :class="{ 'iq-colormark': index === 0 }"
                :style="`background: ${item.primary};border-radius: 5px;`"
                @click="changeColor(item)"
              ></li>
            </ul>
            <div class="border mt-4 mb-4 w-100" />
            <b-row>
              <b-col cols="12" class="justify-content-between">
                <h4 class="text-left mb-2">{{ $t("customizer.colorMode") }}</h4>
                <div class="text-center d-flex">
                  <img
                    :src="require('../assets/images/customizer/light.png')"
                    alt="light"
                    @click="light"
                    class="img-fluid"
                    style="height: 150px; border: 2px solid #1e3d73"
                  />
                  <img
                    :src="require('../assets/images/customizer/dark.png')"
                    alt="dark"
                    @click="dark"
                    class="img-fluid ml-2"
                    style="height: 150px; border: 2px solid #1e3d73"
                  />
                </div>
              </b-col>
            </b-row>
            <div class="border mt-4 mb-4 w-100" />
            <b-row>
              <b-col cols="12" class="justify-content-between">
                <h4 class="text-left mb-2">{{ $t("customizer.rtlMode") }}</h4>
                <div class="text-center d-flex">
                  <img
                    :src="require('../assets/images/customizer/light.png')"
                    alt="light"
                    @click="rtlChange(true)"
                    class="img-fluid"
                    style="height: 150px; border: 2px solid #1e3d73"
                  />
                  <img
                    :src="require('../assets/images/customizer/rtl.png')"
                    alt="dark"
                    @click="rtlChange(false)"
                    class="img-fluid ml-2"
                    style="height: 150px; border: 2px solid #1e3d73"
                  />
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </RightSideBar>
      <div class="wrapper">
        <!-- Sidebar  -->
        <SideBarStyle1
          :items="verticalMenu"
          :horizontal="horizontal"
          @toggle="sidebarMini"
        />
        <!-- TOP Nav Bar -->
        <NavBarStyle1
          title="Dashboard"
          :homeURL="{ name: 'dashboard1.home' }"
          @toggle="sidebarMini"
          :logo="logo"
          :horizontal="horizontal"
          :items="horizontalMenu"
        >
          <template slot="responsiveRight">
            <ul class="navbar-nav ml-auto navbar-list">
              <!-- <li class="nav-item nav-icon">
              <a href="/" class="search-toggle iq-waves-effect bg-primary rounded">
                <i class="ri-notification-line"></i>
                <span class="bg-danger dots"></span>
              </a>
              <div class="iq-sub-dropdown">
                <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body p-0">
                    <div class="bg-primary p-3">
                      <h5 class="mb-0 text-white">
                        {{ $t("nav.allNotifications") }}
                        <small
                          class="badge badge-light float-right pt-1"
                        >4</small>
                      </h5>
                    </div>
                    <a
                      href="#"
                      class="iq-sub-card"
                      v-for="(item, index) in notification"
                      :key="index"
                    >
                      <div class="media align-items-center">
                        <div class>
                          <img class="avatar-40 rounded" :src="item.image" alt="img" />
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0">{{ item.name }}</h6>
                          <small class="float-right font-size-12">
                            {{
                            item.date
                            }}
                          </small>
                          <p class="mb-0">{{ item.description.substring(0, 40) + "..." }}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li> -->
              <li class="nav-item nav-icon">
                <a
                  href="#"
                  class="bg-primary layout-menu-icon rounded"
                  style="background-color: white !important; width: 165px"
                >
                  <!-- <lottie :option="require('../assets/images/small/lottie-mail')" id="lottie-mail" /> -->
                  <i class="ri-grid-fill"></i>
                  <span style="font-size: 20px">HOME MENU</span>
                </a>
              </li>
              <!-- <li class="nav-item nav-icon">
              <a href="#" class="bg-primary rounded" style="font-size:22px">
                <i class="ri-question-fill"></i>
                <span class="bg-primary"></span>
              </a>
            </li> -->
            </ul>
          </template>
          <template slot="right">
            <ul class="navbar-list">
              <li>
                <a
                  href="#"
                  class="
                    search-toggle
                    iq-waves-effect
                    d-flex
                    align-items-center
                  "
                >
                  <img
                    :src="userProfile"
                    class="img-fluid rounded mr-3"
                    alt="user"
                  />
                  <div class="caption">
                    <h6 class="mb-0 line-height">
                      Hi
                      {{ (sessionUser && sessionUser.first_name) || "Unknown" }}
                    </h6>
                    <span class="font-size-12">
                      {{ $t("nav.user.available") }}
                    </span>
                  </div>
                </a>
                <div class="iq-sub-dropdown iq-user-dropdown">
                  <div class="iq-card shadow-none m-0">
                    <div class="iq-card-body p-0">
                      <div class="bg-primary p-3">
                        <h5 class="mb-0 text-white line-height">
                          Hello
                          {{
                            (sessionUser && sessionUser.first_name) || "Unknown"
                          }}
                        </h5>
                        <span class="text-white font-size-12">
                          {{ $t("nav.user.available") }}
                        </span>
                      </div>
                      <router-link to="/user-profile" class="iq-sub-card iq-bg-primary-hover">
                        <div class="media align-items-center">
                          <div class="rounded iq-card-icon iq-bg-primary">
                            <i class="ri-file-user-line"></i>
                          </div>
                          <div class="media-body ml-3">
                            <h6 class="mb-0">
                              {{ $t("nav.user.profileTitle") }}
                            </h6>
                            <p class="mb-0 font-size-12">
                              {{ $t("nav.user.profileSub") }}
                            </p>
                          </div>
                        </div>
                      </router-link>
                      <router-link
                        to="/profile"
                        class="iq-sub-card iq-bg-primary-hover"
                      >
                        <div class="media align-items-center">
                          <div class="rounded iq-card-icon iq-bg-primary">
                            <i class="ri-building-2-line"></i>
                          </div>
                          <div class="media-body ml-3">
                            <h6 class="mb-0">Company Profile</h6>
                            <p class="mb-0 font-size-12">
                              Modify your company details
                            </p>
                          </div>
                        </div>
                      </router-link>
                      <a
                        href="/settings"
                        class="iq-sub-card iq-bg-primary-danger-hover"
                      >
                        <div class="media align-items-center">
                          <div class="rounded iq-card-icon iq-bg-danger">
                            <i class="ri-account-box-line"></i>
                          </div>
                          <div class="media-body ml-3">
                            <h6 class="mb-0">
                              {{ $t("nav.user.accountSettingTitle") }}
                            </h6>
                            <p class="mb-0 font-size-12">
                              {{ $t("nav.user.accountSettingSub") }}
                            </p>
                          </div>
                        </div>
                      </a>
                      <div class="d-inline-block w-100 text-center p-3">
                        <a
                          class="iq-bg-danger iq-sign-btn"
                          href="javascript:void(0)"
                          @click="logout"
                          role="button"
                        >
                          {{ $t("nav.user.signout") }}
                          <i class="ri-login-box-line ml-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </template>
        </NavBarStyle1>
        <!-- TOP Nav Bar END -->
        <div
          id="content-page"
          class="content-page"
          :class="horizontal ? 'ml-0' : ''"
        >
          <transition
            name="router-anim"
            :enter-active-class="`animated ${animated.enter}`"
            mode="out-in"
            :leave-active-class="`animated ${animated.exit}`"
          >
            <router-view />
          </transition>
        </div>
      </div>
      <FooterStyle1>
        <template v-slot:left>
          <li class="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Terms of Use</a>
          </li>
        </template>
        <template v-slot:right>
          Copyright 2020
          <a href="#">Efinop</a> All Rights Reserved.
        </template>
      </FooterStyle1>
    </div>
  </div>
</template>
<script>
import Loader from "../components/findash/loader/Loader";
import SideBarStyle1 from "../components/findash/sidebars/SideBarStyle1";
import NavBarStyle1 from "../components/findash/navbars/NavBarStyle1";
import Menu from "../menu";
import HorizontalItems from "../FackApi/json/HorizontalMenu";
import profile from "../assets/images/user/user-1.jpeg";
import loader from "../assets/images/loader.gif";
import darkLoader from "../assets/images/darkMode/dark-logo.gif";
import { findash } from "../config/pluginInit";
import { Users } from "../FackApi/api/chat";
import { mapGetters, mapActions } from "vuex";
import api, { setAuthToken } from "../Utils/api";

// import Lottie from '../components/findash/lottie/Lottie'
let body = document.querySelector("body");
export default {
  name: "Layout1",
  components: {
    // Lottie,
    Loader,
    SideBarStyle1,
    NavBarStyle1,
  },
  mounted() {
    const secret = localStorage.getItem("access_token");

    if (!secret) {
      this.$router.replace(`/sign-in1`);
    }
    this.updateRadio();
    body.classList.remove("sidebar-main-active");
    body.classList.remove("right-column-fixed");
    if (this.$route.meta.dark) {
      body.classList.add("dark");
      body.classList.remove("light");
      this.logo = darkLoader;
    } else {
      body.classList.add("light");
      body.classList.remove("dark");
      this.logo = loader;
    }

    this.getSession();
  },
  computed: {
    ...mapGetters({
      cartCount: "Ecommerce/cartCountState",
      cartItems: "Ecommerce/cartState",
      selectedLang: "Setting/langState",
      langsOptions: "Setting/langOptionState",
      darkMode: "Setting/darkModeState",
      colors: "Setting/colorState",
      auth: "Setting/authUserAction",
      user: "Setting/authUserState",
    }),
  },
  watch: {},
  // sidebarTicket
  data() {
    return {
      sessionLoader: false,
      sessionUser: {},
      horizontal: false,
      mini: false,
      animated: { enter: "zoomIn", exit: "zoomOut" },
      animateClass: [
        { value: { enter: "zoomIn", exit: "zoomOut" }, text: "Zoom" },
        { value: { enter: "fadeInUp", exit: "fadeOutDown" }, text: "Fade" },
        {
          value: { enter: "slideInLeft", exit: "slideOutRight" },
          text: "Slide",
        },
        {
          value: { enter: "rotateInDownLeft", exit: "rotateOutDownLeft" },
          text: "Roll",
        },
      ],
      horizontalMenu: HorizontalItems,
      verticalMenu: [],
      userProfile: profile,
      logo: loader,
      usersList: Users,
      rtl: false,
      message: [
        {
          image: require("../assets/images/user/user-01.jpg"),
          name: "Nik Emma Watson",
          date: "13 jan",
        },
        {
          image: require("../assets/images/user/user-02.jpg"),
          name: "Greta Life",
          date: "14 Jun",
        },
        {
          image: require("../assets/images/user/user-03.jpg"),
          name: "Barb Ackue",
          date: "16 Aug",
        },
        {
          image: require("../assets/images/user/user-04.jpg"),
          name: "Anna Sthesia",
          date: "21 Sept",
        },
        {
          image: require("../assets/images/user/user-05.jpg"),
          name: "Bob Frapples",
          date: "29 Sept",
        },
      ],
      notification: [
        {
          image: require("../assets/images/user/user-01.jpg"),
          name: "Nik Emma Watson",
          date: "23 hour ago",
          description: "Enjoy smart access to videos, games",
        },
        {
          image: require("../assets/images/user/user-02.jpg"),
          name: "Greta Life",
          date: "14 hour ago",
          description: "Google Chromecast: Enjoy a world of entertainment",
        },
        {
          image: require("../assets/images/user/user-03.jpg"),
          name: "Barb Ackue",
          date: "16 hour ago",
          description: "Dell Inspiron Laptop: Get speed and performance from",
        },
        {
          image: require("../assets/images/user/user-04.jpg"),
          name: "Anna Sthesia",
          date: "21 hour ago",
          description: "Deliver your favorite playlist anywhere in your home ",
        },
        {
          image: require("../assets/images/user/user-05.jpg"),
          name: "Bob Frapples",
          date: "11 hour ago",
          description:
            "MacBook Air features up to 8GB of memory, a fifth-generation",
        },
      ],
    };
  },
  methods: {
    async clearSession() {
      localStorage.clear();
      delete api.defaults.headers.common["Authorization"];
      this.$router.replace(`/sign-in1`);
    },
    async getSession() {
      this.sessionLoader = true;
      const access_token = localStorage.access_token;

      if (access_token) {
        setAuthToken(`Bearer ${localStorage.getItem("access_token")}`);

        await api
          .get("/me")
          .then((res) => {
            const userData =
              res && res.data && res.data.data && res.data.data.user;
            if (userData) {
              this.$store.dispatch("Setting/authUserAction", {
                auth: true,
                user: userData,
              });

              const role = (userData && userData.role) || [];
              this.sessionUser = userData;

              if (role) {
                this.verticalMenu = Menu[role] || [];
              }
            } else {
              this.clearSession();
            }
          })
          .catch((Err) => {
            this.clearSession();
          })
          .finally(() => {
            this.sessionLoader = false;
          });
      }
    },
    dark() {
      body.classList.remove("light");
      body.classList.add("dark");
      this.modeChange(true);
      this.logo = darkLoader;
    },
    light() {
      body.classList.remove("dark");
      body.classList.add("light");
      this.modeChange(false);
      this.logo = loader;
    },
    updateRadio() {
      this.horizontal = this.$store.getters["Setting/horizontalMenuState"];
      this.mini = this.$store.getters["Setting/miniSidebarState"];
    },
    sidebarHorizontal() {
      this.$store.dispatch("Setting/horizontalMenuAction");
      this.updateRadio();
    },
    sidebarMini() {
      findash.triggerSet();
      this.$store.dispatch("Setting/miniSidebarAction");
      this.updateRadio();
    },
    rtlChange(mode) {
      this.rtl = mode;
      if (this.rtl) {
        this.rtlRemove();
      } else {
        this.rtlAdd();
      }
      if (this.darkMode) {
        body.classList.add("dark");
        body.classList.remove("light");
        this.logo = darkLoader;
      } else {
        body.classList.add("light");
        body.classList.remove("dark");
        this.logo = loader;
      }
    },
    changeColor(code) {
      document.documentElement.style.setProperty("--iq-primary", code.primary);
      document.documentElement.style.setProperty(
        "--iq-primary-light",
        code.primaryLight
      );
      if (this.darkMode) {
        document.documentElement.style.setProperty(
          "--iq-bg-dark-color",
          code.bodyBgDark
        );
      } else {
        document.documentElement.style.setProperty(
          "--iq-bg-light-color",
          code.bodyBgLight
        );
      }
    },
    reset() {
      this.changeColor({
        primary: "#827af3",
        primaryLight: "#b47af3",
        bodyBgLight: "#efeefd",
        bodyBgDark: "#1d203f",
      });
      this.animated = { enter: "zoomIn", exit: "zoomOut" };
      this.light();
    },
    logout() {
      localStorage.clear();
      this.$router.push({ name: "auth1.sign-in1" });
      delete api.defaults.headers.common["Authorization"];
    },
    langChange(lang) {
      this.langChangeState(lang);
      this.$i18n.locale = lang.value;
      document.getElementsByClassName("iq-show")[0].classList.remove("iq-show");
      if (lang.value === "ar") {
        this.rtlAdd(lang);
      } else {
        this.rtlRemove(lang);
      }
    },
    ...mapActions({
      removeToCart: "Ecommerce/removeToCartAction",
      langChangeState: "Setting/setLangAction",
      rtlAdd: "Setting/setRtlAction",
      rtlRemove: "Setting/removeRtlAction",
      modeChange: "Setting/darkModeAction",
    }),
  },
  beforeDestroy() {
    document.removeEventListener("storage", this.storageListener);
  },
};
</script>
<style>
@import url("../assets/css/custom.css");
@import url("../assets/css/PriceSlider.css");

.layout-menu-icon {
  color: #1f3d73 !important;
  font-size: 28px !important;
  border: 2px solid #1f3d73 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
</style>
