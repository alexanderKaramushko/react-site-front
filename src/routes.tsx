import {
    Route,
} from 'react-router-dom';
import React from 'react';
import AboutUs from './components/pages/AboutUs';
import Contacts from './components/pages/Contacts';
import Main from './components/pages/Main';

interface Routes {
    component: React.ComponentType<any>;
    isExact?: boolean;
    path: string;
}

export const routesArr = [
    {
        component: Main,
        isExact: true,
        path: '/',
    },
    {
        component: AboutUs,
        path: '/about-us',
    },
    {
        component: Contacts,
        path: '/contacts',
    },
];

export const createRoutes = (routesArray: Routes[]): React.ReactNode => routesArray.map((route) => {
    const { component, isExact, path } = route;
    return <Route key={path} path={path} component={component} exact={isExact} />;
});
