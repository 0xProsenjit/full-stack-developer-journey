// forEach method

// The arr.forEach method allows to run a function for every element of the array.
// The syntax:
// arr.forEach(function(currentValue, index, arr) {
// .......... do something with an item
// },thisValue);

const fruits = ["apple", "banana", 'mango'];
fruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index}: ${fruit}`);
});

let ranks = ["A", "B", "C"];
ranks.forEach(function(e) {
  console.log(e);
});


const numbers = ["2", "4", "6"];
numbers.forEach((n, index, arr) => {
  arr[index] = n * 3;
});
console.log(numbers);

const nums = [10, 20, 30];
let sum = 0;
nums.forEach((n) => {
  sum += n;
});
console.log(sum);


const counts = [11, 20, 33, 66, 85];
let prop = { even: 0, odd: 0};

counts.forEach((n) => {
  if (n % 2 === 0) {
    prop.even++;
  } else {
    prop.odd++;
  }
});

console.log(prop);

const digits = [1, 5, 36, 44, 85, 404, 156, 255, 333];
digits.forEach((n) => {
  if (n % 2 === 0) {
    console.log(n);
  }
});

const cars = ['Mercedes-Benz', 'Toyta', 'Ferrari'];
cars.forEach(function(n, index, arr) {
  arr[index] = 'Brand ' + n;
});

console.log(cars);

const students = ['John', 'Alice', 'Sara'];
students.forEach(function(n, index, arr) {
  arr[index] = 'Hello ' + n;
});

console.log(students);

// নেমড ফাংশন দিয়ে forEach মেথড কল

const amounts = [2, 3, 5, 8, 100, 55];
let result = 0;
amounts.forEach(myFunction);

function myFunction(n, index, arr) {
  result += n;
}

console.log(result);

// for loop
const count = [2, 3, 5, 8, 100, 55];
let len = count.length;
let total = 0;
for (i = 0; i < len; i++) {
  total += count[i];
}

console.log(total);


// forEach
const letter = ['A', 'B', 'C'];
letter.forEach((e) => {
  console.log(e);
});

let validData = true;
let unValidData = false;
let ages = [18, 22, 33];

ages.forEach((n) => {
  if (n <= 18) {
    console.log('validData:', validData);
  } else {
    console.log ('unValidData:', unValidData);
  }
});
