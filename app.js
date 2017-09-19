const express = require('express');
const morgan = require('morgan');

const espn = require('./espn');

const app = express();

app.set('json spaces', 2);

app.use(morgan('short'));
app.use('/rankings/espn', espn);

app.listen(process.env.PORT || 3000, function () {
    console.log('Fantasy Rankings API is ready to win!')
});
