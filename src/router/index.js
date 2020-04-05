import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";
import ForgotPassword from "../components/auth/ForgotPassword.vue";
import Home from "../views/Home.vue";
import VendorList from "../components/Emails/VendorList.vue";
import VendorEmailList from "../components/Emails/VendorEmailList.vue";
import ComposeVendorEmail from "../components/Emails/ComposeVendorEmail.vue";
import SmtpHostList from "../components/Emails/SmtpHostList";
import SmtpHostCreate from "../components/Emails/SmtpHostCreate";
import SmtpEmailList from "../components/Emails/SmtpEmailList";
import ComposeSmtpEmail from "../components/Emails/ComposeSmtpEmail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: "/vendors",
    name: "VendorList",
    component: VendorList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/vendors/emails",
    name: "VendorEmailList",
    component: VendorEmailList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/compose/vendor-email",
    name: "ComposeVendorEmail",
    component: ComposeVendorEmail,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/smtp-hosts",
    name: "SmtpHostList",
    component: SmtpHostList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/smtp-hosts/create",
    name: "SmtpHostCreate",
    component: SmtpHostCreate,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/smtp-emails",
    name: "SmtpEmailList",
    component: SmtpEmailList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/compose/smtp-email",
    name: "ComposeSmtpEmail",
    component: ComposeSmtpEmail,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
