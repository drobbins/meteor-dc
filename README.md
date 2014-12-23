# Meteor DC.JS

A [Meteor](https://meteor.com) packaging of [dc.js](http://dc-js.github.io/dc.js/).

[Docs](https://github.com/dc-js/dc.js/blob/master/web/docs/api-1.6.0.md).

## Dependency Notes

* Missing `d3` on the global object? It's under `Package["d3js:d3"].d3`. This appears to be an interaction between `d3` and the Meteor package system.