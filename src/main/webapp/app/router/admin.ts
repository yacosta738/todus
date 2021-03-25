import { Authority } from '@/shared/security/authority';

const TodusUserManagementComponent = () => import('@/admin/user-management/user-management.vue');
const TodusUserManagementViewComponent = () => import('@/admin/user-management/user-management-view.vue');
const TodusUserManagementEditComponent = () => import('@/admin/user-management/user-management-edit.vue');
const TodusDocsComponent = () => import('@/admin/docs/docs.vue');

export default [
  {
    path: '/admin/user-management',
    name: 'TodusUser',
    component: TodusUserManagementComponent,
    meta: { authorities: [Authority.ADMIN] },
  },
  {
    path: '/admin/user-management/new',
    name: 'TodusUserCreate',
    component: TodusUserManagementEditComponent,
    meta: { authorities: [Authority.ADMIN] },
  },
  {
    path: '/admin/user-management/:userId/edit',
    name: 'TodusUserEdit',
    component: TodusUserManagementEditComponent,
    meta: { authorities: [Authority.ADMIN] },
  },
  {
    path: '/admin/user-management/:userId/view',
    name: 'TodusUserView',
    component: TodusUserManagementViewComponent,
    meta: { authorities: [Authority.ADMIN] },
  },
  {
    path: '/admin/docs',
    name: 'TodusDocsComponent',
    component: TodusDocsComponent,
    meta: { authorities: [Authority.ADMIN] },
  },
];
