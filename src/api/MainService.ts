import CrudService from './CrudService';
import { Users } from '../models/base/Users';

class MainService extends CrudService<Users> {

    constructor() {
        super('main');
    }

}

export default MainService;
