'use strict';

module.exports = function countSameElements(collection) {
    let result = [];
    collection.forEach(function (item){
        let count = 1;
        if(item.indexOf('-') !== -1) {
            let kv = item.split('-');
            item = kv[0];
            count = Number(kv[1]);
        }
        let obj = result.find(r => r.key === item);
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: count});
        }
    });

    return result;
}
