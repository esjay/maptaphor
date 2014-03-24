require.config({
    paths: {
        "lodash": "../bower_components/lodash/dist/lodash",
        "d3": "../bower_components/d3/d3"
    }
});

define(["lodash", "libList"], function(_, libList) {
    var output = _.pluck(libList.libs, "name").join(", ");

    document.querySelector("#content").textContent = output;
});
