import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Devices from "../views/Devices.vue";
import Tenant from "../views/Tenant.vue";
import RTL from "../views/Rtl.vue";
import Notifications from "../views/Notifications.vue";
import Profile from "../views/Profile.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Users from "../views/Users.vue";
import Setting from "../views/Setting.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "대시보드",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "디바이스 관리",
    component: Devices,
  },
  {
    path: "/billing",
    name: "테넌트 관리",
    component: Tenant,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/notifications",
    name: "이벤트 관리",
    component: Notifications,
  },
  {
    path: "/profile",
    name: "프로필",
    component: Profile,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/users",
    name: "사용자 관리",
    component: Users,
  },
  {
    path: "/setting",
    name: "설정",
    component: Setting,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
