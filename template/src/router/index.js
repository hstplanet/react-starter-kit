import home from '../assets/home.png';
import search from '../assets/search.png';
import notifications from '../assets/bell.png';
import settings from '../assets/settings.png';

import Index from "../pages/index"
import NotFound from "../pages/404"
import Search from "../pages/Search"
import Notification from "../pages/Notification"
import Settings from "../pages/Settings"
import Profile from "../pages/Profile/Profile"

{{preset.loginsystem}}
import SignIn from "../pages/Login/SignIn"
import SignUp from "../pages/Login/SignUp"
import Forget from "../pages/Login/Forget"
import Reset from "../pages/Login/Reset"
import ResetPassword from "../pages/Login/ResetPassword"

import Address from "../pages/Profile/Address/Address"
import EditProfile from "../pages/Profile/EditProfile/EditProfile"

const RouterMainLayout = [

    {
        name: "Anasayfa",
        path: "Index",
        icon: home,
        drawer: true,
        meta: {},
        isSecurty: false,
        component: Index,
    },
    {
        name: "Ara",
        path: "Search",
        icon: search,
        drawer: true,
        meta: {},
        isSecurty: false,
        component: Search
    },
    {
        name: "Favorilerim",
        path: "Notifications",
        icon: notifications,
        drawer: true,
        meta: {},
        isSecurty: false,
        component: Notification
    },
    {
        name: "Ayarlar",
        path: "Settings",
        icon: settings,
        drawer: true,
        meta: {},
        isSecurty: false,
        component: Settings
    },

    {
        name: "Profil",
        path: "Profile",
        icon: settings,
        drawer: false,
        meta: {},
        isSecurty: false,
        component: Profile
    },
    {
        name: "Address",
        path: "Address",
        icon: settings,
        drawer: false,
        meta: {},
        isSecurty: false,
        component: Address
    },
    {
        name: "EditProfile",
        path: "EditProfile",
        icon: settings,
        drawer: false,
        meta: {},
        isSecurty: false,
        component: EditProfile
    },
    {
        name: "NotFound",
        path: "NotFound",
        icon: null,
        drawer: false,
        meta: {},
        isSecurty: false,
        component: NotFound
    }

]

const RouterLoginLayout = [

    {
        name: "SignIn",
        path: "SignIn",
        icon: home,
        drawer: true,
        meta: {},
        isSecurty: false,
        component: SignIn,
    },
    {
        name: "SignUp",
        path: "SignUp",
        icon: search,
        drawer: true,
        meta: {},
        isSecurty: false,
        component: SignUp,
    },
    {
        name: "Forget",
        path: "Forget",
        icon: notifications,
        drawer: true,
        meta: {},
        isSecurty: false,
        component: Forget
    },
    {
        name: "Reset",
        path: "Reset",
        icon: notifications,
        drawer: true,
        meta: {},
        isSecurty: false,
        component: Reset
    },
    {
        name: "ResetPassword",
        path: "ResetPassword",
        icon: notifications,
        drawer: true,
        meta: {},
        isSecurty: false,
        component: ResetPassword
    }
]
export { RouterMainLayout, RouterLoginLayout}