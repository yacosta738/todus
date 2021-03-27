import Component from 'vue-class-component';
import {Inject, Vue} from 'vue-property-decorator';
import LoginService from '@/account/login.service';
import NewTweetTextarea from "@/shared/components/new-tweet-textarea/new-tweet-textarea.vue";
import TweetsWrapper from "@/shared/components/tweets-wrapper/tweets-wrapper.vue";

@Component({components: {NewTweetTextarea, TweetsWrapper}})
export default class Home extends Vue {
  @Inject('loginService')
  private loginService: () => LoginService;

  public openLogin(): void {
    this.loginService().openLogin((<any>this).$root);
  }

  public get authenticated(): boolean {
    return this.$store.getters.authenticated;
  }

  public get username(): string {
    return this.$store.getters.account ? this.$store.getters.account.login : '';
  }
}
