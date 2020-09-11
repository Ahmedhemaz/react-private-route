import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ProtoTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isAbleToAccessRoute, reditectPath, ...rest }) => {
    <Route {...rest} render={props => (
        isAbleToAccessRoute() ?
            <Component {...props} />
            : <Redirect to={reditectPath} />
    )} />
}

export default PrivateRoute;

PrivateRoute.prototype = {
    isAbleToAccessRoute: ProtoTypes.func.isRequired,
    reditectPath: ProtoTypes.string.isRequired
}