import Vue from 'vue'
import VueRouter from 'vue-router'
/* Layouts */
import Layout1 from '../layouts/Layout'
import AuthLayout1 from '../layouts/AuthLayout'

/* Authentic View */
import SignIn1 from '../views/AuthPages/Default/SignIn1'
import SignIn2 from '../views/AuthPages/Default/SignIn2'
import SignUp1 from '../views/AuthPages/Default/SignUp1'
import SignUp2 from '../views/AuthPages/Default/SignUp2'
import SignUp3 from '../views/AuthPages/Default/SignUp3'
import SignUp4 from '../views/AuthPages/Default/SignUp4'
import RecoverPassword1 from '../views/AuthPages/Default/RecoverPassword1'
import LockScreen1 from '../views/AuthPages/Default/LockScreen1'
import ConfirmMail1 from '../views/AuthPages/Default/ConfirmMail1'
import ResetPassword from '../views/AuthPages/Default/ResetPassword'
import RegisterInvite from '../views/AuthPages/Default/RegisterInvite'

/* App View */
import Home from '../views/Home'
import ChartOfAccounts from '../views/ChartOfAccounts'
import ReviewCOA from '../views/ReviewCOA'
import UploadCOA from '../views/UploadCOA'
import FinalCOA from '../views/FinalCOA'
import Focus from '../views/Focus'
import SSOI from '../views/SSOI'
import TrialBalanceImport from '../views/TrialBalanceImport'
import BalanceSheet from '../views/BalanceSheet'
import Inventory from '../views/Inventory'
import Reports from '../views/Reports'
import Export from '../views/Export'
import Settings from '../views/Settings'
import Profile from '../views/User/ProfileEdit'
import UserProfile from "../views/User/UserProfile"
import Introduction from '../views/Introduction'
import Users from '../views/Users'

Vue.use(VueRouter)

const AppRoutes = (prop, mode) => [
  {
    path: '/',
    name: prop + '.home',
    meta: { dark: mode, auth: true, name: 'Home' },
    component: Home
  },
  {
    path: '/intro',
    name: prop + '.intro',
    meta: { dark: mode, auth: true, name: 'Introduction' },
    component: Introduction
  },
  {
    path: 'coa',
    name: prop + '.coa',
    meta: { dark: mode, auth: true, name: 'Chart Of Accounts' },
    component: ChartOfAccounts,
    children: coaChildRoutes('coa')
  },
  {
    path: 'trialBalance',
    name: prop + '.trialBalance',
    meta: { dark: mode, auth: true, name: 'Trial Balance' },
    component: TrialBalanceImport
  },
  {
    path: 'balanceSheet',
    name: prop + '.balanceSheet',
    meta: { dark: mode, auth: true, name: 'Balance Sheet' },
    component: BalanceSheet
  },
  {
    path: 'inventory',
    name: prop + '.inventory',
    meta: { dark: mode, auth: true, name: 'Inventory' },
    component: Inventory
  },
  {
    path: 'reports',
    name: prop + '.reports',
    meta: { dark: mode, auth: true, name: 'Reports' },
    component: Reports
  },
  {
    path: 'export',
    name: prop + '.export',
    meta: { dark: mode, auth: true, name: 'Export' },
    component: Export
  },
  {
    path: 'settings',
    name: prop + '.settings',
    meta: { dark: mode, auth: true, name: 'Settings' },
    component: Settings,
    children: settingsChildRoutes('settings')
  },
  {
    path: 'profile',
    name: prop + '.profile',
    meta: { dark: mode, auth: true, name: 'Profile' },
    component: Profile
  },
  {
    path: 'user-profile',
    name: prop + '.user-profile',
    meta: { dark: mode, auth: true, name: 'UserProfile' },
    component: UserProfile
  }
]

const authChildRoutes = (prop, mode = false) => [
  {
    path: '/sign-in1',
    name: prop + '.sign-in1',
    meta: { dark: mode, auth: true },
    component: SignIn1
  },
  {
    path: '/sign-in2',
    name: prop + '.sign-in2',
    meta: { dark: mode, auth: true },
    component: SignIn2
  },
  {
    path: 'sign-up1',
    name: prop + '.sign-up1',
    meta: { dark: mode, auth: true },
    component: SignUp1
  },
  {
    path: 'sign-up2',
    name: prop + '.sign-up2',
    meta: { dark: mode, auth: true },
    component: SignUp2
  },
  {
    path: 'sign-up3',
    name: prop + '.sign-up3',
    meta: { dark: mode, auth: true },
    component: SignUp3
  },
  {
    path: 'sign-up4',
    name: prop + '.sign-up4',
    meta: { dark: mode, auth: true },
    component: SignUp4
  },
  {
    path: '/register-invite',
    name: prop + '.register-invite',
    meta: { dark: mode, auth: true },
    component: RegisterInvite
  },
  {
    path: '/password-reset1',
    name: prop + '.password-reset1',
    meta: { dark: mode, auth: true },
    component: RecoverPassword1
  },
  {
    path: 'lock-screen1',
    name: prop + '.lock-screen1',
    meta: { dark: mode, auth: true },
    component: LockScreen1
  },
  {
    path: 'confirm-mail1',
    name: prop + '.confirm-mail1',
    meta: { dark: mode, auth: true },
    component: ConfirmMail1
  },
  {
    path: '/reset-password',
    name: prop + '.reset-password',
    meta: { dark: mode, auth: true },
    component: ResetPassword
  }
]


const coaChildRoutes = (prop, mode = false) => [
  {
    path: '/coa/review',
    name: prop + '.review',
    meta: { dark: mode, auth: true },
    component: ReviewCOA
  },
  {
    path: '/coa/upload',
    name: prop + '.upload',
    meta: { dark: mode, auth: true },
    component: UploadCOA
  },
  {
    path: '/coa/focus',
    name: prop + '.focus',
    meta: { dark: mode, auth: true },
    component: Focus
  },
  {
    path: '/coa/ssoi',
    name: prop + '.ssoi',
    meta: { dark: mode, auth: true },
    component: SSOI
  },
  {
    path: '/coa/final',
    name: prop + '.final',
    meta: { dark: mode, auth: true },
    component: FinalCOA
  }
]


const settingsChildRoutes = (prop, mode = false) => [
  {
    path: '/settings/users',
    name: prop + '.users',
    meta: { dark: mode, auth: true },
    component: Users
  }
]

const routes = [
  {
    path: '/',
    name: 'app',
    component: Layout1,
    meta: { auth: true },
    children: AppRoutes('app')
  },
  {
    path: '/auth',
    name: 'auth1',
    component: AuthLayout1,
    meta: { auth: true },
    children: authChildRoutes('auth1')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})

export default router
