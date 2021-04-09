import { Component, Vue } from 'vue-property-decorator';
import LayoutMixin from '@/shared/mixin/layout.mixin';
import { mixins } from 'vue-class-component';

@Component
export default class LandingPage extends mixins(LayoutMixin) {}
