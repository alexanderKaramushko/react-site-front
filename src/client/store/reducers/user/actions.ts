import { createAction } from 'typesafe-actions';

import { USER_TYPES } from './types';
import { UserFromJwt } from '../../../models/base/UserFromJwt';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const updateUser = createAction(USER_TYPES.UPDATE_USER, (user: UserFromJwt) => user)();
