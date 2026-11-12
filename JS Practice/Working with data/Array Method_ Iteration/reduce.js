// reduce method
/*
synatx:
array.reduce(callbackFn(accumulator, currentValue, currentIndex, array) => {
    // Body of the reducer function
}, initialValue);
*/

const num = [10, 20, 30];
const sum = num.reduce((acc, curr) =>
  acc + curr, 0);
console.log(sum);

// array concat
const nums = [[1, 3], [4, 6], [7, 9]];
const concatNums = nums.reduce((acc, num) => acc.concat(num), []);
console.log(concatNums);

// Counting Occurrences
const fruits = ['apple', 'banana', 'licci', 'apple', 'licci', 'apple', 'banana', 'mango'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count);

// Working with an Array of Objects
const products = [
  { id: 1, brand: 'MSI', price: 14000},
  { id: 2, brand: 'ASUS', price: 13000},
  { id: 3, brand: 'Gigabyte', price: 12000}
];

const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice);


//Data Transformation
const transctions = [
  { type: 'income', amount: 200 },
  { type: 'expense', amount: 20 },
  { type: 'income', amount: 40 }
];
const capital = transctions.reduce((acc, transction) => {
  return transction.type === 'income' ? acc + transction.amount : acc - transction.amount;
}, 0);

console.log(capital);


// Accessing the First Element in a Transformation
const items = [10, 20, 30];
// const firstItem = items.reduce((acc, item) => acc || item[1], null);
const secondItem = items.reduce((acc, item, index) => {
  if (index === 1) {
    return item;
  }
  return acc;
}, null)
console.log(secondItem);


// Managing Empty Objects
const keys = [];
const emptyObj = keys.reduce((acc, key) => {
  // acc[key] = null;
  return acc;
}, {});

console.log(emptyObj);
