# private-route-react

## private-route-react is a library to handle private routing of react-router-dom instead of creating it manually.
___
# Installation
Use the package manager [npm](https://www.npmjs.com/) to install private-route-react

    npm install private-route-react
___
# Usage

    import PrivateRoute from 'private-route-react';

    <PrivateRoute path={routePath} component={Component} isAbleToAccessRoute={isAbleToAccessRouteFunction} redirectPath={redirectPath} />

| property  | Description |
| ------------- | ------------- |
| path  | routing path you want to go to  |
| component  | component you want to render in this path  |
| isAbleToAccessRoute  | function which have to return boolean to check if he isa able to go to that path or not  |
| redirectPath  | routing path to go to if he is not allowed to go to that path  |
___
# Example

- isLoggedIn.js

        const isLoggedIn = ()=> false;
        export default isLoggedIn;
- app.js

        import PrivateRoute from 'private-route-react';
        import isLoggedIn from './isLoggedIn.js';
        import ComponentA from './Component';


        <PrivateRoute path={'/profile'} component={ComponentA} isAbleToAccessRoute=   {isLoggedIn} redirectPath={'/login'} />
___
# Tests
made using Jest to check tests run
    
    npm run test
___
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
___
## License
[MIT](https://choosealicense.com/licenses/mit/)