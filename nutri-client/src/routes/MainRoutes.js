import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
const Meals = lazy(() => import('../pages/Meals/Meals'));


const MainRoutes = props => {

    //!ROUTES
    let routes = (
        <Switch>
            {/* {console.log('NOT Guarded Routes')} */}
            <Route path='/Meals' exact component={Meals} />
            <Redirect from='/' to='/Meals' />
        </Switch>
    );
    //!MAIN RENDER
    return (
        <React.Fragment>
            <Suspense fallback={<h1 style={{opacity: 0}}>''</h1>} >
                {routes}
            </Suspense>
        </React.Fragment>
    )
}

export default withRouter(MainRoutes);

