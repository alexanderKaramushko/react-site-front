import { Role } from '../../common/types/client';

export interface DecodedJWTToken {
  exp: number;
  iat: number;
  username: string;
  role: Role;
}
