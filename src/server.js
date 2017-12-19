const express = require('express');
const morgan = require('morgan');

const football = require('./football');

const app = express();

app.set('json spaces', 2);

app.use(morgan('short'));

app.use('/football', football);

app.listen(process.env.PORT || 8090, function () {
  console.log('espn-rankings is up!')
});

