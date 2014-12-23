Package.describe({
  name: "robbinsd:dc",
  summary: "Multi-Dimensional charting built to work natively with crossfilter rendered with d3.js",
  version: "1.7.3_1",
  git: "https://github.com/drobbins/meteor-dc.git"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.4");
  api.use(["d3js:d3@3.4.13","pfafman:crossfilter@1.3.9"], "client");
  api.addFiles(["dc.js", "dc.css"], "client");
});

Package.onTest(function(api) {
  api.use("tinytest");
  api.use(["d3js:d3@3.4.13","pfafman:crossfilter@1.3.9"], "client");
  api.use("robbinsd:dc", "client");
  api.addFiles("dc-tests.js", "client");
});
