var express = require('express');
var router = express.Router();
var jobs = require('./tasks/jobs');

router.get('/run/:task', function(req, res) {
  var task = req.params.task;
  if (task !== 'email' && task !== 'ml') {
    return res.send("valid task types are 'email' and 'ml'");
  }

  var job = jobs.create(task, req.query);

  job.on('complete', function(result) {
    console.log('completed job ' + job.id);
    return res.send(result);
  });

  job.save(function(err) {
    if (err) {
      console.log('failed to queue job ' + job.id);
    } else {
      console.log('queued job ' + job.id)
    }
  });
});

module.exports = router;
