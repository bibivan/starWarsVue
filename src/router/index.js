import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'mainPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MainPage.vue'),
  },
  {
    path: '/film-page',
    name: 'fimPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/FilmPage.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
