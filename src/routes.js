import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';

export default function Routes () {
    return (
        <ToastProvider autoDismiss autoDismissTimeout={4000}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/products" component={Products} />
                </Switch>
            </BrowserRouter>
        </ToastProvider>
    );
}