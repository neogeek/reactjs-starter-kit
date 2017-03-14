import React from 'react';
import ReactDOM from 'react-dom';

import {Router} from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

import Routes from './routes';

ReactDOM.render(
    <Router history={history}>
        {Routes}
    </Router>,
    document.getElementById('site-wrapper')
);
