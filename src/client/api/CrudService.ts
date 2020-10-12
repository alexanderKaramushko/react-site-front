import BaseService from './BaseService';
import { AbstractEntity } from '../models/base/AbstractEntity';

class CrudService<T extends AbstractEntity> extends BaseService {

    public async read(): Promise<T> | never {
        try {
            const response = await BaseService.axios.request({
                method: 'GET',
                url: this.path,
            });

            return response.data as T;
        } catch (error) {
            throw new Error(`Request failed: ${error}`);
        }
    }

}

export default CrudService;
