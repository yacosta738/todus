import { Component, Vue } from 'vue-property-decorator';
import UserProfile from '@/core/user-profile/user-profile.vue';

@Component({ components: { UserProfile } })
export default class UserProfileMenu extends Vue {
  public dropdownOpen: boolean = false;

  get imageUrl(): string {
    return this.$store.getters.account?.imageUrl ? this.$store.getters.account.imageUrl : 'https://i.pravatar.cc/300';
  }

  get fullName(): string {
    return this.$store.getters.account?.firstName ? `${this.$store.getters.account.firstName} ${this.$store.getters.account.lastName}` : '';
  }

  get login(): string {
    return this.$store.getters.account?.login ? this.$store.getters.account?.login : '';
  }

  public logout(): void {
    localStorage.removeItem('todus-authenticationToken');
    sessionStorage.removeItem('todus-authenticationToken');
    this.$store.commit('logout');
    this.$router.push('/', () => {});
  }
}
