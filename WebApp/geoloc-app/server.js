/**
 * Created by merlin on 23/01/17.
 */
const express = require('express');
const fs = require('fs');

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});


//Listen to the request and respond with the database answer
app.get('/db/', (request, response) => {
    const param = request.query.q;

    if (!param) {
        response.json({
            error: 'Missing required parameter `q`',
        });
        return;
    }

    const executeRequest = require('./server/Request.js').default;
    const id = JSON.parse(param).id;
    const requestResponse = executeRequest(id);
    if(typeof requestResponse === 'undefined')
        response.json({answer : "work but anwser empty"});
    else
        response.json(requestResponse);
});