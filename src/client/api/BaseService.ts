import axios, { AxiosInstance } from 'axios';

class BaseService {

    public static axios: AxiosInstance = axios.create({ baseURL: 'api/' });
    protected path: string;

    constructor(path: string) {
        this.path = path;
    }

}

export default BaseService;
