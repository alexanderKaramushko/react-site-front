import { RouteProps } from 'react-router-dom';
import { Role } from '../common/types/client';

export enum ROUTE_WAYS {
  ABOUT = '/about-us',
  ADMIN_PROFILE = '/admin-profile',
  ADMIN_SIGN_IN = '/admin',
  BASE = '/',
  CONTACTS = '/contacts',
}

export interface RouteMeta {
  role: Role[];
}

export interface CustomRouteProps extends RouteProps {
  meta: RouteMeta;
}
