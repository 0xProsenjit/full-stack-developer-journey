// syntax
/*
array.findIndex(callback(element, index, array), {
return element for newArray;
}, thisArg);
*/
// Basic eample
const nums = [2, 40, 50, 33, 125];
const largeNum = nums.findIndex(num => num > 45);
console.log(largeNum);


const numbers = [2, 5, 14, 19, 27, 44];
const oddNumber = numbers.findIndex((number) => {
  if (number % 2 == 0);
  return numbers[number];
}, {});

console.log(oddNumber);


const users = [
  { name: 'Rahim', age: 19 },
  { name: 'Karim', age: 17 },
  { name: 'Jamal', age: 21}
];

const foundIndex = users.findIndex(user => user.age > 20);
console.log(foundIndex);


const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday'];
const foundDay = days.findIndex(day => day === 'Sunday');
console.log(foundDay);
