Package.describe({
  name: 'robbinsd:dc',
  summary: 'Multi-Dimensional charting built to work natively with crossfilter rendered with d3.js',
  version: '1.7.1',
  git: 'https://github.com/drobbins/meteor-dc.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.4');
  api.use(['sergeyt:d3@3.4.1','pfafman:crossfilter@1.3.9'], 'client');
  if (api.export) api.export("dc", "client");
  api.addFiles('dc.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('robbinsd:dc');
  api.addFiles('dc-tests.js', 'client');
});
