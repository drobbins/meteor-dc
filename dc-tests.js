// Write your tests here!
// Here is an example.
Tinytest.add("Includes dc.js version 1.7.3", function (test) {
  test.equal(dc.version, "1.7.3");
});
Tinytest.add("Include d3.js version 3.4.13", function (test) {
    test.equal(Package["d3js:d3"].d3.version, "3.4.13");
});
Tinytest.add("Include crossfilter version 1.3.9", function (test) {
    test.equal(crossfilter.version, "1.3.9");
});