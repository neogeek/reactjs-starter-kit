import React from 'react';
import ReactDOM from 'react-dom';

import {Route, Switch} from 'react-router-dom';

import AppView from './views/app';
import NoMatchView from './views/nomatch';

import AboutView from './views/about';
import WelcomeView from './views/welcome';

export default
<AppView>
    <Switch>
        <Route exact path="/" component={WelcomeView} />
        <Route path="/about" component={AboutView} />
        <Route component={NoMatchView} />
    </Switch>
</AppView>;

