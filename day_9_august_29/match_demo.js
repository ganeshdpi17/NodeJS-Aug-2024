let str = 'rain in spain mainly stays in the plAin';

let res1 = str.match(/ain/gi);
console.log(res1);

let arr = str.matchAll(/ain/g);
for (let ele of arr) {
    console.log(ele)
}

let str2 = 'ram and hari are 2 friends, ram is 14 and hari is 15';
let nums = str2.match(/[0-9]{1,2}/g);
console.log(nums);



