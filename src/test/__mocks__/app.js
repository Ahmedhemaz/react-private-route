import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
const About = () => <h1>You are on the about page</h1>
const Home = () => <h1>You are home</h1>
const Profile = () => <h1>Your Profile</h1>
const isNotAbleToAccessRouteImp = () => false;
const isAbleToAccessRouteImp = () => true;
const redirectPath = '/';


function App() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
            <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute path="/about" component={About} isAbleToAccessRoute={isNotAbleToAccessRouteImp} redirectPath={redirectPath} />
                <PrivateRoute path="/profile" component={Profile} isAbleToAccessRoute={isAbleToAccessRouteImp} redirectPath={redirectPath} />
            </Switch>
        </div>
    )
}

export { App }