var kue = require('kue');
var config = require('../config');

var jobs = kue.createQueue({
  redis: config.redis
});

module.exports = jobs;
