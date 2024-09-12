let args = process.argv.slice(2);
console.log(args); // args is Array of string

let obj = {};
for (ele of args) {
    let [key, val] = ele.split('=');
    obj[key] = val;
}
console.log(obj);
