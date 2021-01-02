import { Route } from 'react-router-dom';
import React from 'react';
import AboutUs from '../components/pages/AboutUs';
import Contacts from '../components/pages/Contacts';
import Main from '../components/pages/Main';
import { ROUTE_WAYS } from './routes.types';

interface Routes {
    component: React.ComponentType;
    isExact?: boolean;
    path: ROUTE_WAYS;
}

export const listItems = [
    { link: ROUTE_WAYS.BASE, title: 'nav.main' },
    { link: ROUTE_WAYS.ABOUT, title: 'nav.about' },
    { link: ROUTE_WAYS.CONTACTS, title: 'nav.contacts' },
];

export const routesArr = [
    {
        component: Main,
        isExact: true,
        path: ROUTE_WAYS.BASE,
    },
    {
        component: AboutUs,
        path: ROUTE_WAYS.ABOUT,
    },
    {
        component: Contacts,
        path: ROUTE_WAYS.CONTACTS,
    },
];

export const createRoutes = (routesArray: Routes[]): React.ReactNode => routesArray.map((route) => {
    const { component, isExact, path } = route;
    return <Route key={path} path={path} component={component} exact={isExact} />;
});
