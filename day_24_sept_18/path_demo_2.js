const path = require('path');

let pathStr = path.format({
    dir: 'C:/Users/SANJAY/OneDrive/Desktop/NareshIT/node_19_august_2024/day_24_sept_18',
    base: 'path_demo_2.js'
})
console.log(pathStr);

let pathObj = path.parse(pathStr);
console.log(pathObj)

const joinRes1 = path.join('/users', 'sanjay', 'OneDrive', 'Desktop', 'NareshIT/node_19_august_2024/')
console.log(joinRes1);

let part1 = '/abc/'
let part2 = '/xyz/'
console.log(part1.concat(part2));
console.log(path.join(part1, part2));

let relativePath = 'day_24_sept_18/path_demo_2.js';
console.log(path.resolve(relativePath)); // returns absolute path

let notNormalizedPath = '..//day_23_sept_17//file_1.txt/.';
let normalizedPath = path.normalize(notNormalizedPath);
console.log(normalizedPath)
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'))
console.log(path.normalize('/foo/bar//baz/asdf/quux/../..'))


