'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    collectionA.forEach(function (obj) {
        if(objectB.value.find(r => r === obj.key)){
            obj.count--;
        }
    });
    return collectionA;
}
