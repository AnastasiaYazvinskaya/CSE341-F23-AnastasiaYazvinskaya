const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

var app = express();
const port = process.env.PORT || 3000;


app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
        console.log(`DB connected`);
    }
})