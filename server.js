const express = require('express');
const morgan = require('morgan');

const espn = require('./espn');

const app = express();

app.set('json spaces', 2);

app.use(morgan('short'));

app.use('/rankings/espn', espn);

app.listen(process.env.PORT || 8090, function () {
  console.log('DFS MVP API is ready to win!')
});

