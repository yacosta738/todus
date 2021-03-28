import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LayoutMixin extends Vue {
  mounted(){
    this.$store.commit('setLayout', 'simple-layout');
  }
  beforeDestroy(){
    this.$store.commit('setLayout', 'app-layout');
  }
}
