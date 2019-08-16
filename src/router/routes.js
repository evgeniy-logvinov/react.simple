import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import HomePage from '../components/home/HomePage';
import ProductsPage from '../components/product/ProductsPage';
import ProductPage from '../components/product/ProductPage';
import AboutPage from '../components/about/AboutPage';
import LogInPage from '../components/LogInPage';
import ProfilePage from '../components/profile/ProfilePage';
import TicketPage from '../components/ticket/TicketPage';
import Notfound from '../components/Notfound';
import {PrivateRoute} from '../components/PrivateRoute';

const routes = () => (
    <div>
        <Switch>
            <Route exact path="/home" component={HomePage} />
            <Redirect exact from="/" to="/products" />
            <Route path="/login" component={LogInPage} />
            <PrivateRoute exact path="/products" component={ProductsPage}/>
            <PrivateRoute exact path="/products/:productId" component={ProductPage}/>
            <PrivateRoute exact path="/profile" component={ProfilePage}/>
            <Route path="/about" component={AboutPage} />
            <Route path="/ticket" component={TicketPage} />
            <Route component={Notfound} />
        </Switch>
    </div >
);

export default routes;