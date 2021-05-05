import axios, { AxiosInstance } from 'axios';

import { getAccessToken } from './utils';

class BaseService {

  public static axios: AxiosInstance = axios.create({ baseURL: 'api' });
  protected path: string;

  constructor(path: string) {
    this.path = path;
  }

}

BaseService.axios.interceptors.request.use((requestConfig) => {
  const accessToken = getAccessToken();
  const requestConfigCopy = { ...requestConfig };

  if (accessToken) {
    requestConfigCopy.headers.Authorization = `Bearer ${accessToken}`;
  }

  return requestConfigCopy;
});

export default BaseService;
