const _ = require('lodash')

let res = _.flatten([1, [2, [3, [4]], 5]]);
console.log(res);