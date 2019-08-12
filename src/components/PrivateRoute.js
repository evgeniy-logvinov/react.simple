import React from 'react';
import { Route, Redirect } from 'react-router';
import { isLoggedIn } from '../utility'

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        isLoggedIn()
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
)