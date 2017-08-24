'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    return collectionA.filter(e => collectionB[0].includes(e));
}
