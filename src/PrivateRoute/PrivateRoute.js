import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ProtoTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isAbleToAccessRoute, redirectPath, ...rest }) => {
    return <Route {...rest} render={props => (
        isAbleToAccessRoute() ?
            <Component {...props} />
            : <Redirect to={redirectPath} />
    )} />
}

export default PrivateRoute;

PrivateRoute.prototype = {
    isAbleToAccessRoute: ProtoTypes.func.isRequired,
    redirectPath: ProtoTypes.string.isRequired
}