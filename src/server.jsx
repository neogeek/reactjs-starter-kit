import path from 'path';

import React, {createElement} from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router';
import routes from './js/routes';

import express from 'express';

const app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../static')));

app.get('*', (req, res) => {

    res.status(200).render('default', {
        'content': renderToString(<StaticRouter context={{}} location={req.url}>
            {routes}
        </StaticRouter>)
    });

});

app.listen(process.env.PORT || '5000');
