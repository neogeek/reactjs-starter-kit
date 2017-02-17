const path = require('path');

const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '/static')));

app.get('*', (request, response) => {

    response.sendFile(path.join(__dirname, '/static', 'index.html'));

});

app.listen(process.env.PORT || '5000');
