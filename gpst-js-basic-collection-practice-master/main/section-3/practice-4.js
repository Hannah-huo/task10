'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let collectionC = summarize(collectionA);
    return subcount(collectionC, objectB);
};

function subcount(collectionC, objectB) {
    collectionC.forEach(function (obj) {
        if (objectB.value.find(r => r === obj.key)) {
            obj.count -= parseInt(obj.count / 3);
        }
    });
    return collectionC;
};

function summarize(collectionA) {
    let result = [];
    collectionA.forEach(function (item) {
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
