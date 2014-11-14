var jobs = require('./jobs');

jobs.process('ml', function(job, done) {
  console.log('processing job ' + job.id);

  if (job.data.a && job.data.b) {
    return done(null, job.data.a + job.data.b);
  } else {
    return done(null, 'provide queryparams a and b');
  }
});
