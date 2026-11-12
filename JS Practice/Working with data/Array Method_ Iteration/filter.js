/*
Syntax:
array.filter(callbackFn(currentValue, index, array), {
return element for newArray;
}, thisArg);
*/

const num = [10, 20, 30, 104, 55, 85, 66, 220];
const smallNum = num.filter(n => n < 100);
console.log(smallNum);

//Filtering Based on a Condition
// Without Filter by for loop:

const nums = [3, 8, 11, 24, 35];
const evenNumbers = []; // global scope
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
   evenNumbers.push(nums[i]);
  // console.log(nums[i]);
  }
}

console.log(evenNumbers);


// With Filter by map method
const numbers = [3, 8, 11, 24, 35];
const evenNums = numbers.filter(n => n % 2 === 0);
console.log(evenNums);


// Filtering Out Null or Undefined Values
// Without Filter:
const values = [10, 20, null, 55, undefined];
const searchValues = [];
for (let i = 0; i < values.length; i++) {
  if (values[i] == null && values[i] == undefined) {
    searchValues.push(values[i]);
  }
}

console.log(searchValues);


//With Filter:
const amounts = [10, 20, null, 55, undefined];
const searchAmounts = amounts.filter(value => value == null && value == undefined);
console.log(searchAmounts);


// Filtering Objects Based on Property Values
const products = [
  { id: 1, name: 'product 1', price: 100 },
  { id: 2, name: 'product 2', price: 200 },
  { id: 3, name: 'product 3', price: 300 }
];

/*
// without filter
const filteredProducts = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].price > 100) {
    filteredProducts.push(products[i]);
  }
}

 console.log(filteredProducts);
*/

// with filter
const filteredProducts = products.filter(n => n.price > 100);
console.log(filteredProducts);


const product = [
  {name: 'phone', brand: 'Apple', price: '$5000'},
  {name: 'car', brand: 'Ferari', price: '$10000'},
  { name: 'phone', brand: 'Samsung', price: '$4000'},
  { name: 'car', brand: 'Toyta', price: '$8000'},
  {name: 'car', brand: 'Ferari', price: '$15000'},
];

const filteredProduct = product.filter(n => n.brand === 'Ferari');
console.log(filteredProduct);
