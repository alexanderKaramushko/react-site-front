import React from 'react';
import intersection from 'lodash/intersection';
import { Route } from 'react-router-dom';
import { CustomRouteProps, RouteMeta, ROUTE_WAYS } from './routes.types';
import AboutUs from '../components/pages/AboutUs';
import AdminSignIn from '../components/pages/AdminSignIn';
import Contacts from '../components/pages/Contacts';
import Main from '../components/pages/Main';
import { Role } from '../common/types/client';

export const listItems = [
  { link: ROUTE_WAYS.BASE, title: 'nav.main' },
  { link: ROUTE_WAYS.ABOUT, title: 'nav.about' },
  { link: ROUTE_WAYS.CONTACTS, title: 'nav.contacts' },
];

export const routes: CustomRouteProps[] = [
  {
    component: Main,
    exact: true,
    meta: {
      role: [Role.PUBLIC],
    },
    path: ROUTE_WAYS.BASE,
  },
  {
    component: AboutUs,
    meta: {
      role: [Role.PUBLIC],
    },
    path: ROUTE_WAYS.ABOUT,
  },
  {
    component: Contacts,
    meta: {
      role: [Role.PUBLIC],
    },
    path: ROUTE_WAYS.CONTACTS,
  },
  {
    component: AdminSignIn,
    meta: {
      role: [Role.ADMIN],
    },
    path: ROUTE_WAYS.ADMIN_SIGN_IN,
  },
];

export function createRoutes(routeProps: CustomRouteProps[], routeMeta: RouteMeta): React.ReactNode {
  return routeProps.reduce((availableRoutes, route) => {
    const { component, exact, meta, path } = route;
    const { role } = routeMeta;

    const isRouteAvailable = intersection(role, meta.role).length > 0;

    if (isRouteAvailable) {
      return [
        ...availableRoutes,
        <Route
          key={path as string}
          path={path}
          component={component}
          exact={exact}
        />,
      ];
    }
    return availableRoutes;
  }, []);
}
