import axios from 'axios';
import {Component, Inject} from 'vue-property-decorator';
import AccountService from '@/account/account.service';
import LayoutMixin from "@/shared/mixin/layout.mixin";
import {mixins} from 'vue-class-component';
import Alerts from "@/shared/components/alerts/alerts.vue";
import {alertError, messageText} from "@/shared/components/alerts/alert-type.enum";

@Component({components: {Alerts}})
export default class Login extends mixins(LayoutMixin) {
  @Inject('accountService')
  private accountService: () => AccountService;
  public authenticationError = false;
  public login = null;
  public password = null;
  public rememberMe: boolean = false;

  public doLogin(): void {
    const data = {username: this.login, password: this.password, rememberMe: this.rememberMe};
    axios
      .post('api/authenticate', data)
      .then(result => {
        const bearerToken = result.headers.authorization;
        if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
          const jwt = bearerToken.slice(7, bearerToken.length);
          if (this.rememberMe) {
            localStorage.setItem('todus-authenticationToken', jwt);
            sessionStorage.removeItem('todus-authenticationToken');
          } else {
            sessionStorage.setItem('todus-authenticationToken', jwt);
            localStorage.removeItem('todus-authenticationToken');
          }
        }
        this.authenticationError = false;
        this.accountService().retrieveAccount();
      })
      .catch(() => {
        this.authenticationError = true;
      });
  }
  get alertError(){
    return alertError;
  }
}
