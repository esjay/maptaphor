require.config({
    paths: {
        "lodash": "bower_components/lodash/lodash.js",
        "d3": "bower_components/d3/d3.js"
    }
});

define(["libList"], function(libList) {
    var output = "";

    libList.libs.forEach(function(lib) {
        output += lib.name;
    });

    document.querySelector("#content").textContent = output;
});
