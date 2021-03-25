import * as setupAxiosConfig from '@/shared/config/axios-interceptor';
import { SERVER_API_URL } from '@/constants';

describe('Axios interceptor', () => {
  it('should use localStorage to provide bearer', () => {
    localStorage.setItem('todus-authenticationToken', 'auth');
    const result = setupAxiosConfig.onRequestSuccess(() => console.log('A problem occured'));

    expect(result.headers.Authorization).toBe('Bearer auth');
    expect(result.url.indexOf(SERVER_API_URL)).toBeGreaterThan(-1);
  });

  it('should use sessionStorage to provide bearer', () => {
    sessionStorage.setItem('todus-authenticationToken', 'auth');
    const result = setupAxiosConfig.onRequestSuccess(() => console.log('A problem occured'));

    expect(result.headers.Authorization).toBe('Bearer auth');
    expect(result.url.indexOf(SERVER_API_URL)).toBeGreaterThan(-1);
  });
});
