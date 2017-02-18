import React from 'react';
import ReactDOM from 'react-dom';

import {
    IndexRoute,
    Route
} from 'react-router';

import AboutView from './views/about';
import AppView from './views/app';
import WelcomeView from './views/welcome';

export {
    AboutView,
    AppView,
    WelcomeView
};

export default <Route name="app" path="/" component={AppView}>
    <IndexRoute name="welcome" component={WelcomeView} />
    <Route name="about" path="about" component={AboutView} />
</Route>;
