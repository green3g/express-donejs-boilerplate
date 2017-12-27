const doneSSR = require('done-ssr-middleware');

module.exports = doneSSR({
  config: __dirname + '/package.json!npm',
  liveReload: true,
});
