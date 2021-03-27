import { Authority } from '@/shared/security/authority';
/* tslint:disable */
// prettier-ignore

// prettier-ignore
const Tweets = () => import('@/entities/tweets/tweets.vue');
// prettier-ignore
const TweetsUpdate = () => import('@/entities/tweets/tweets-update.vue');
// prettier-ignore
const TweetsDetails = () => import('@/entities/tweets/tweets-details.vue');
// prettier-ignore
const Customer = () => import('@/entities/customer/customer.vue');
// prettier-ignore
const CustomerUpdate = () => import('@/entities/customer/customer-update.vue');
// prettier-ignore
const CustomerDetails = () => import('@/entities/customer/customer-details.vue');
// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

export default [
  {
    path: '/tweets',
    name: 'Tweets',
    component: Tweets,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/tweets/new',
    name: 'TweetsCreate',
    component: TweetsUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/tweets/:tweetsId/edit',
    name: 'TweetsEdit',
    component: TweetsUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/tweets/:tweetsId/view',
    name: 'TweetsView',
    component: TweetsDetails,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/customer',
    name: 'Customer',
    component: Customer,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/customer/new',
    name: 'CustomerCreate',
    component: CustomerUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/customer/:customerId/edit',
    name: 'CustomerEdit',
    component: CustomerUpdate,
    meta: { authorities: [Authority.USER] },
  },
  {
    path: '/customer/:customerId/view',
    name: 'CustomerView',
    component: CustomerDetails,
    meta: { authorities: [Authority.USER] },
  },
  // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
];
