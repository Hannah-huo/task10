'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    return collectionA.filter(e => objectB.value.includes(e));
}
