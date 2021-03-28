import router from '@/router';

export default class LoginService {
  public openLogin(): void {
    router.replace({ name: 'Login' });
  }
}
