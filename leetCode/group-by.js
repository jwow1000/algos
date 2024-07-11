const theArr = [
    {"id":"1"},
    {"id":"1"},
    {"id":"2"},
]

Array.prototype.groupBy = function(fn) {
    console.log(fn);
}
theArr.groupBy("poop");
