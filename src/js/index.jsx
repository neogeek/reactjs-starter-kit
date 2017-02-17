import React from 'react';
import ReactDOM from 'react-dom';

import {
    browserHistory,
    IndexRoute,
    Route,
    Router
} from 'react-router';

import AboutView from './views/about';
import AppView from './views/app';
import WelcomeView from './views/welcome';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route name="app" path="/" component={AppView}>
            <IndexRoute name="welcome" component={WelcomeView} />
            <Route name="about" path="about" component={AboutView} />
        </Route>
    </Router>,
    document.getElementById('site-wrapper')
);
