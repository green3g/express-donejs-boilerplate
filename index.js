// required for es6 syntax
require('babel-register');

const app = require('./server/services/app');
const express = require('@feathersjs/express');

// static files
app.use(express.static(__dirname + '/public'));

// services
require('./server/services/todo');


// donejs
app.use('/', require('./public/ssr-service'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
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
