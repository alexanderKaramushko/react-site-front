import { createAsyncAction } from 'typesafe-actions';

import { AuthRequestPayload } from '../../../api/AuthService/types';
import { AUTHENTICATION_TYPES } from './types';

export const authenticateAsync = createAsyncAction(
  AUTHENTICATION_TYPES.AUTHENTICATION_ASYNC_REQUEST,
  AUTHENTICATION_TYPES.AUTHENTICATION_ASYNC_SUCCESS,
  AUTHENTICATION_TYPES.AUTHENTICATION_ASYNC_FAILURE,
)<AuthRequestPayload, null, string>();
