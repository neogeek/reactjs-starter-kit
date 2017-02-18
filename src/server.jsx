import path from 'path';

import React, {createElement} from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import routes from './js/routes';

import express from 'express';

const app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../static')));

app.get('*', (req, res) => {

    match({
        'location': req.url,
        routes
    }, (error, redirectLocation, renderProps) => {

        if (error) {

            res.status(500).send(error.message);

        } else if (redirectLocation) {

            res.redirect(302, redirectLocation.pathname + redirectLocation.search);

        } else if (renderProps) {

            res.status(200).render('default', {
                'content': renderToString(<RouterContext {...renderProps} />)
            });

        } else {

            res.status(404).send('Not found');

        }

    });

});

app.listen(process.env.PORT || '5000');
