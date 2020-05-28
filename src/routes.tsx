import App from './components/App';
import AboutUs from './components/AboutUs';
import Contacts from './components/Contacts';
import {
    Route,
} from 'react-router-dom';

import * as React from 'react';

interface route {
    path: string,
    component: React.ComponentType<any>,
    isExact?: boolean,
}


export const routesArr = [
    {
        path: '/',
        isExact: true,
        component: App,
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

export const createRoutes = (routesArray : route[]) : React.ReactNode => {
    return routesArray.map((elem, i) => (
        <Route key={i} path={elem.path} component={elem.component} exact={elem.isExact}/>
    ))
}