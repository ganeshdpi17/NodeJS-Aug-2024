const path = require('path');

console.log(`Separator ${path.sep}`);
console.log(`Delimeter ${path.delimiter}`);

const dirName = path.dirname('C:/Users/SANJAY/OneDrive/Desktop/NareshIT/node_19_august_2024/day_24_sept_18/path_demo_1.js')
console.log(dirName);

const fileNamewithExt = path.basename('C:/Users/SANJAY/OneDrive/Desktop/NareshIT/node_19_august_2024/day_24_sept_18/path_demo_1.js')
console.log(fileNamewithExt);

const extName = path.extname('C:/Users/SANJAY/OneDrive/Desktop/NareshIT/node_19_august_2024/day_24_sept_18/path_demo_1.js')
console.log(extName);

const isAbsolutePath1 = path.isAbsolute('C:/Users/SANJAY/OneDrive/Desktop/NareshIT/node_19_august_2024/day_24_sept_18/path_demo_1.js')
console.log(isAbsolutePath1)

const isAbsolutePath2 = path.isAbsolute('day_24_sept_18/path_demo_1.js')
console.log(isAbsolutePath2)