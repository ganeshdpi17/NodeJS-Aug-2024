let sentences = ['this is javascript class', 'this is array session'];

// convert array of sentences to array of words
let res1 = sentences.map(sentence => sentence.split(' '));
console.log(res1)
console.log(res1.flat())

let res2 = sentences.flatMap(sentence => sentence.split(' '));
console.log(res2)
