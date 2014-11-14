var jobs = require('./jobs');

jobs.process('email', function(job, done) {
  console.log('processing job ' + job.id);
  done(null, 'email sent with ' + Object.keys(job.data).length + ' special fields');
});
