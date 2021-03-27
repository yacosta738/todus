import Vue from 'vue';
import Component from 'vue-class-component';
import Ribbon from '@/core/ribbon/ribbon.vue';
import JhiNavbar from '@/core/jhi-navbar/jhi-navbar.vue';
import LeftMenu from '@/core/left-menu/left-menu.vue';
import RightMenu from '@/core/right-menu/right-menu.vue';
import LoginForm from '@/account/login-form/login-form.vue';

import '@/shared/config/dayjs';

@Component({
  components: {
    ribbon: Ribbon,
    LeftMenu,
    RightMenu,
    'login-form': LoginForm,
    'jhi-navbar': JhiNavbar,
  },
})
export default class App extends Vue {}
