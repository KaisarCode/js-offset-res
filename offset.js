// Offset results array
function offsetRes(res, offset) {
    offset = offset || 0;
    var i = 0; var tmp = [];
    res.forEach(function(r){
        if (i >= offset) {
            tmp.push(r);
        } i ++;
    });
    return tmp;
}
