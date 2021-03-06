'use strict';


module.exports = function countSameElements(collection) {
    let result = [];
    collection.forEach(function (item){
        let obj = result.find(r => r.key === item);
        if (obj) {
            obj.count++;
        }
        else {
            result.push({key:item, count: 1});
        }
    });

    return result;
}
