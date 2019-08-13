import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../../auth';

const PrivateRoute =({component: RouterComponent, ...rest}) => {
    const {currentUser} = useContext(AuthContext);
    return (
        <Route
        {...rest}
        render={routeProps =>
        !!currentUser ? (
            <RouterComponent {...routeProps} />
        ) : (
            <Redirect to={"/signin"} />
        )
        }
        />
    );
};

export default PrivateRoute;
