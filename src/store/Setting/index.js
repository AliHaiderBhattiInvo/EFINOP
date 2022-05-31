import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import SideBarItems from '../../FackApi/json/GlobalSearch'

const state = {
  horizontalMenu: false,
  miniSidebarMenu: false,
  darkMode: false,
  lang: {
    title: 'English',
    value: 'en',
    image: require('../../assets/images/small/flag-01.png')
  },
  langOption: [
    {
      title: 'English',
      value: 'en',
      image: require('../../assets/images/small/flag-01.png')
    },
    {
      title: 'Arabic',
      value: 'ar',
      image: require('../../assets/images/small/flag-500.png')
    },
    {
      title: 'Chinese',
      value: 'chi',
      image: require('../../assets/images/small/flag-300.png')
    },
    {
      title: 'Hindi',
      value: 'hi',
      image: require('../../assets/images/small/flag-100.png')
    },
    {
      title: 'Greek',
      value: 'gr',
      image: require('../../assets/images/small/flag-400.png')
    },
    {
      title: 'Franch',
      value: 'fr',
      image: require('../../assets/images/small/flag-200.png')
    }
  ],
  colors: [
    {
      primary: '#1e3d73',
      primaryLight: '#1e3d73',
      bodyBgLight: '#1e3d73',
      bodyBgDark: '#1d203f'
    },
    {
      primary: '#02d871',
      primaryLight: '#02d871',
      bodyBgLight: '#02d871',
      bodyBgDark: '#1d203f'
    },
    {
      primary: '#309cf3',
      primaryLight: '#7abbf3',
      bodyBgLight: '#eaf5ff',
      bodyBgDark: '#1d203f'
    },
    {
      primary: '#FF00FF',
      primaryLight: '#f3c37a',
      bodyBgLight: '#fff8ea',
      bodyBgDark: '#1d203f'
    },
    {
      primary: '#fb1f4c',
      primaryLight: '#de8ba9',
      bodyBgLight: '#ffeaf5',
      bodyBgDark: '#1d203f'
    },
    {
      primary: '#00CED1',
      primaryLight: '#a3f37a',
      bodyBgLight: '#f0ffea',
      bodyBgDark: '#1d203f'
    },
    {
      primary: '#f35f3b',
      primaryLight: '#dbf37a',
      bodyBgLight: '#f7ffea',
      bodyBgDark: '#1d203f'
    },
    {
      primary: '#fde117',
      primaryLight: '#dbf37a',
      bodyBgLight: '#f7ffea',
      bodyBgDark: '#1d203f'
    },
    {
      primary: '#ff0000',
      primaryLight: '#dbf37a',
      bodyBgLight: '#f7ffea',
      bodyBgDark: '#1d203f'
    },
    {
      primary: '#88028c',
      primaryLight: '#dbf37a',
      bodyBgLight: '#f7ffea',
      bodyBgDark: '#1d203f'
    },
    {
      primary: '#00d5ab',
      primaryLight: '#dbf37a',
      bodyBgLight: '#f7ffea',
      bodyBgDark: '#1d203f'
    },
    {
      primary: '#ce9252',
      primaryLight: '#dbf37a',
      bodyBgLight: '#f7ffea',
      bodyBgDark: '#1d203f'
    },
    {
      primary: '#f9ae02',
      primaryLight: '#dbf37a',
      bodyBgLight: '#f7ffea',
      bodyBgDark: '#1d203f'
    },
    {
      primary: '#1e7fe4',
      primaryLight: '#dbf37a',
      bodyBgLight: '#f7ffea',
      bodyBgDark: '#1d203f'
    },
    {
      primary: '#006400',
      primaryLight: '#dbf37a',
      bodyBgLight: '#f7ffea',
      bodyBgDark: '#1d203f'
    },
    {
      primary: '#fa7c04',
      primaryLight: '#dbf37a',
      bodyBgLight: '#f7ffea',
      bodyBgDark: '#1d203f'
    },
    {
      primary: '#81bf02',
      primaryLight: '#dbf37a',
      bodyBgLight: '#f7ffea',
      bodyBgDark: '#1d203f'
    },
    {
      primary: '#99a7ca',
      primaryLight: '#dbf37a',
      bodyBgLight: '#f7ffea',
      bodyBgDark: '#1d203f'
    },
    {
      primary: '#3d2a26',
      primaryLight: '#dbf37a',
      bodyBgLight: '#f7ffea',
      bodyBgDark: '#1d203f'
    },
    {
      primary: '#a0746b',
      primaryLight: '#dbf37a',
      bodyBgLight: '#f7ffea',
      bodyBgDark: '#1d203f'
    }
  ],
  authUser: {
    auth: false,
    authType: false,
    user: {}
  },
  users: [
    {
      id: 'sh46s546sdg564sdffs4hsd6fh',
      name: 'Admin findash',
      mobileNo: null,
      email: 'admin@findash.com',
      profileImage: null,
      password: 'admin123'
    }
  ],
  globalSearch: SideBarItems,
  bookmark: [
    {
      title: 'Video Chat',
      link: { name: 'app.chat' },
      is_icon_class: true,
      icon: 'ri-message-line'
    },
    {
      title: 'Product Listing',
      link: { name: 'app.e-commerce.index' },
      is_icon_class: true,
      icon: 'ri-file-list-line'
    },
    {
      title: 'Social App',
      link: { name: 'social.list' },
      is_icon_class: true,
      icon: 'ri-question-answer-line'
    },
    {
      title: 'Todo',
      link: { name: 'app.todo' },
      is_icon_class: true,
      icon: 'ri-chat-check-line'
    },
    {
      title: 'Inbox',
      link: { name: 'app.email' },
      is_icon_class: true,
      icon: 'ri-inbox-line'
    }
  ],
  activePage: {
    name: 'Dashboard',
    breadCrumb: [
      {
        html: '<i class="ri-home-4-line mr-1 float-left"></i>Home',
        to: { name: 'mini.dashboard.home-1' }
      },
      {
        text: '',
        href: '#'
      }
    ]
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
