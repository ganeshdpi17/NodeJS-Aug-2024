let myMap = new Map();

myMap.set('name', 'sanjay')
myMap.set('age', 40)
myMap.set('add', 'Bangalore')
myMap.set('salary', 5000)

// How to check size of a map
console.log(myMap.size)

//check if a key present
console.log(myMap.has('name')); // true
console.log(myMap.has('dob')); // false

// to read 1 value
console.log(myMap.get('name'))

myMap.delete('salary');
console.log(myMap);
myMap.clear();
console.log(myMap);