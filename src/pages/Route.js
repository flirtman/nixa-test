import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home'));

const App = (props) => (
    <Router>
        <Suspense fallback={
            <div id="loading-screen">Loading...</div>
        }>
            <Switch>
                <Route exact path={`/`} component={Home}/>
            </Switch>
        </Suspense>
    </Router>
);

export default App;
