let str = 'entertainment';

// Char Occurance using Object
let res = {};
for (char of str) {
    if (res[char]) {
        res[char] = res[char] + 1;
    } else {
        res[char] = 1;
    }
}
console.log(res)

// Char Occurance using Map
let charMap = new Map();
for (char of str) {
    if (charMap.has(char)) {
        charMap.set(char, charMap.get(char) + 1);
    } else {
        charMap.set(char, 1);
    }
}
console.log(charMap)