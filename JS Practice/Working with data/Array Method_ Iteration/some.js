// syntax
/*
array.findIndex(callback(element, index, array), {
return element for newArray;
}, thisArg);
*/

// Basic Example
const nums = [1, 3, 4, 7, 10, 17];
const oddNum = nums.some(num => num % 2 === 0)
console.log(oddNum);


const fruits = [
  { name: 'apple', piece: 10 },
  { name: 'banana', piece: 8 },
  { name: 'orange', piece: 6 }
];
const found = fruits.some(fruit => fruit.name === 'apple');
console.log(found);
