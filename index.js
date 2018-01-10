const app = require('./server/services/app');
const express = require('@feathersjs/express');

// static files
app.use(express.static(__dirname + '/public'));

// services
// require('./server/services/todo');


// donejs
// Make sure the ssr middleware is the last
// middleware in the chain but before the error handler
app.use('/', require('./public/ssr-service'));

// start the server on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

// start the steal tools live-reload server
if (process.argv.indexOf('--develop') !== -1) {
  const path = require('path');
  const { exec } = require('child_process');

  // is dev mode so do live reload
  console.log('Live Reload listening in since --develop was passed');
  const child = exec(path.join('node_modules', '.bin', 'steal-tools live-reload'), {
    cwd: `${process.cwd()}/public`,
  }, (error, stdout, stderr) => {
    if (error) {
      console.error(error);
    }

    console.log(stdout);
  });

  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
}
