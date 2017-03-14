import React from 'react';
import ReactDOM from 'react-dom';

import {
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

export default <AppView>
    <Route exact path="/" component={WelcomeView} />
    <Route path="/about" component={AboutView} />
</AppView>;
