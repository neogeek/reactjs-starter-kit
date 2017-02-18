import React from 'react';
import ReactDOM from 'react-dom';

import {
    browserHistory,
    IndexRoute,
    Route,
    Router
} from 'react-router';

import Routes from './routes';

ReactDOM.render(
    <Router history={browserHistory}>
        {Routes}
    </Router>,
    document.getElementById('site-wrapper')
);
