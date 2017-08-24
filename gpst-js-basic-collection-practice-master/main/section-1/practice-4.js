'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    return collectionA.map(e => e.key).filter(key => objectB.value.includes(key));
}
