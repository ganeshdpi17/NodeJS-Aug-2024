let carSet = new Set();
carSet.add('tata');
carSet.add('honda');
carSet.add('maruti');
carSet.add('hundai');
carSet.add('tata');
carSet.add('honda');
carSet.add('maruti');
carSet.add('hundai');
carSet.add('tata');
carSet.add('honda');
console.log(carSet)
console.log(carSet.size); // to check the size of Set
console.log(carSet.has('tata')); // true
console.log(carSet.has('audi')); // false
carSet.delete('maruti'); // delete 1 item
console.log(carSet); // 3 items
carSet.clear();
console.log(carSet); // 0
