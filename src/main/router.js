import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/courses/:cid",
      props: true,
      component: () => import("./views/Course"),
      children: [
        {
          path: "homeworks",
          props: true,
          component: () => import("./views/Homework")
        }
      ]
    }
  ]
});
