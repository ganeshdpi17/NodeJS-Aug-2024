import fs from 'fs'; // ESM

let data1 = fs.readFileSync('./file_1.txt', 'utf8'); // synchronous
let data2 = fs.readFileSync('./file_2.txt', 'utf8'); // main Thread is blocked
fs.writeFileSync('./file_3.txt', `${data1} \n ${data2}`);

