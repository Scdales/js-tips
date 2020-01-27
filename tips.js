// Add an item to an array
function a(...args){

  return function b(t){
    return [...args, t];
  }
}
const array = a(1, 3, 3, 4)(2);
console.log('Appended array');
console.log(array);

// Remove a property from an object without mutating using closures
const object = {
  name: 'Hello',
  age: 23,
  password: 'genericpassword'
}

const removePropName = 'password';

const removeProp = prop => ({ [prop]:_, ...rest }) => rest;

const removePassword = removeProp(removePropName);

const newObject = removePassword(object);

console.log('Old Object');
console.log(object);
console.log('New Object');
console.log(newObject);

// Quine example
console.log('Quine');
$=_=>`$=${$};$()`;$()
console.log($());

// Generate a random alphanumerical string of length 11
const randomUid = Math.random().toString(36).substring(2);
console.log('Random UID');
console.log(randomUid);

// Generate a random hex code
const randomHex = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');
console.log('Random Hex value');
console.log(randomHex);

// Find if a number (b) is in range of two others (a, c)
const isInRange = (a, b, c) => [...Array(c - a +1)].map((e, i) => i + a).indexOf(b) !== -1
console.log('Is 5 between 1 and 10');
console.log(isInRange(1,5,10));
console.log('Is 7 between 1 and 4');
console.log(isInRange(1,7,4));