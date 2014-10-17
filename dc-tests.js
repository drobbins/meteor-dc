// Write your tests here!
// Here is an example.
Tinytest.add('exposes dc', function (test) {
  test.isNotNull(dc);
});

Tinytest.add('includes d3 and crossfilter', function (test) {
  test.isNotNull(d3);
  test.isNotNull(crossfilter);
});
