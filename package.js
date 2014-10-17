Package.describe({
  name: 'dc',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('undefined');
  api.addFiles('dc.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dc');
  api.addFiles('dc-tests.js');
});
