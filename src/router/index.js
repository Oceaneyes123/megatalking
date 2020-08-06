import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [{
    path: "/index",
    name: "Index",
    component: require('../views/Index.vue').default
  },
  {
    path: "/",
    name: "Main",
    component: require('../views/Main.vue').default
  },
  {
    path: "/enrollment",
    name: "Enrollment",
    component: require('../views/Enrollment.vue').default
  },


];

const router = new VueRouter({
  routes
});

export default router;