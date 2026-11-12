//syntax
/*
array.find(callback(element, index, array), {
return element for newArray;
}, thisArg);
*/
// Basic Example
const nums = [10, 20, 30, 50];
const found = nums.find(found => found > 22);
console.log(found);

// obkect found
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Alice' },
  { id: 3, name: 'Bob' }
];

const foundUser = users.find(user => user.name === 'Alice');
console.log(foundUser);

// Basic Example
const numbers = [10, 15, 25, 50];
const numFound = numbers.find(number => number > 17);
console.log(numFound);