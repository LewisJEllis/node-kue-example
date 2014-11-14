var logger = require('morgan');
var express = require('express');

var app = express();
app.set('port', 3000);
app.use(logger('dev'));

var api = require('./api');
app.use('/', api);

var server = app.listen(app.get('port'), function () {
  console.log('Express server listening at http://%s:%s', server.address().address, server.address().port);
});
