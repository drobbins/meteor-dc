# Meteor DC.JS

A [Meteor](https://meteor.com) packaging of [dc.js](http://dc-js.github.io/dc.js/).

[Docs](https://github.com/dc-js/dc.js/blob/master/web/docs/api-1.6.0.md).

## Dependency Notes

* Missing `d3` on the global object? It's under `Package["d3js:d3"].d3`. Alternately, `meteor add d3js:d3` to your project.
  * [This appears to be an intentional feature of Meteor](https://github.com/meteor/meteor/issues/3362)
