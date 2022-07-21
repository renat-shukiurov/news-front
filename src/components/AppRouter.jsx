import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {publicRoutes} from "../router";

const AppRouter = () => {

    return (
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                <Redirect to="/posts"/>
            </Switch>
    );
};

export default AppRouter;