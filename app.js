const express = require('express');
const morgan = require('morgan');

const espnFootball = require('./espn-football');

const app = express();

app.use(morgan('short'));

app.set('json spaces', 2);

app.use('/rankings/espn/football', espnFootball);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
