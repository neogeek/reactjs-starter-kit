import React from 'react';
import ReactDOM from 'react-dom';

import {Route, Switch} from 'react-router-dom';

import AboutView from './views/about';
import AppView from './views/app';
import RootView from './root';
import NoMatchView from './views/nomatch';
import WelcomeView from './views/welcome';

export {
    AboutView,
    AppView,
    WelcomeView
};

export default <RootView>
    <Switch>
        <Route exact path="/" component={WelcomeView} />
        <Route path="/about" component={AboutView} />
        <Route component={NoMatchView} />
    </Switch>
</RootView>;
