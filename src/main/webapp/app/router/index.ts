import Vue from 'vue';
import Component from 'vue-class-component';
import Router from 'vue-router';
import account from '@/router/account';
import admin from '@/router/admin';
import entities from '@/router/entities';
import pages from '@/router/pages';

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate', // for vue-router 2.2+
]);

const Home = () => import('@/core/home/home.vue');
const Error = () => import('@/core/error/error.vue');
const LandingPage = () => import('@/core/landing-page/landing-page.vue');

Vue.use(Router);

// prettier-ignore
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: LandingPage
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {authorities: ['ROLE_USER']}
    },
    {
      path: '/forbidden',
      name: 'Forbidden',
      component: Error,
      meta: {error403: true}
    },
    {
      path: '/not-found',
      name: 'NotFound',
      component: Error,
      meta: {error404: true}
    },
    ...account,
    ...admin,
    ...entities,
    ...pages
  ]
});
