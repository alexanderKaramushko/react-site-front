import BaseService from '../BaseService';
import { AuthRequestPayload, AuthResponse } from './types';

class AuthService extends BaseService {

  constructor() {
    super('auth');
  }

  authenticate = async (authRequestPayload: AuthRequestPayload): Promise<AuthResponse> => {
    try {
      const response = await BaseService.axios.request({
        data: authRequestPayload,
        method: 'POST',
        url: `${this.path}/login`,
      });

      return response.data as AuthResponse;
    } catch (error) {
      throw new Error(`Authentication failed: ${error}`);
    }
  }

}

export default AuthService;
