import {
    Route,
} from 'react-router-dom';
import React from 'react';
import AboutUs from './components/pages/AboutUs';
import Contacts from './components/pages/Contacts';
import Main from './components/pages/Main';

interface route {
    component: React.ComponentType<any>;
    isExact?: boolean;
    path: string;
}

export const routesArr = [
    {
        path: '/',
        isExact: true,
        component: Main,
    },
    {
        path: '/about-us',
        component: AboutUs,
    },
    {
        path: '/contacts',
        component: Contacts,
    },
];

export const createRoutes = (routesArray: route[]): React.ReactNode => routesArray.map((route) => {
    const { component, isExact, path } = route;
    return <Route key={path} path={path} component={component} exact={isExact} />;
});
