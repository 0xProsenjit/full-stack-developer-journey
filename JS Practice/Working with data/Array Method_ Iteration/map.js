/*
Syntax:
 arr.map(callbackFn(currentValue, Index, arr) {
 return element for newArray;
 }, thisArg);
*/



const nums = [10, 20, 30, 40];
const double = nums.map(n => n * 2);
console.log(double);


const old = ['shoo', 'phone', 'bike'];
//old[1] = 'gins';
//console.log(old);
const update = old.map(n => {
  return n.charAt(0).toUpperCase() + n.slice(1) ;
});

console.log(update);

// strting convert to number
const strings = ['10', '20', '30'];
// const numbers = strings.map(Number);  // Number object ব্যবহার করে
const numbers = strings.map(n => parseInt(n)) // parseInt function ব্যবহার করে
console.log(numbers);

//Object Transformation
const users = [{ name: 'Alice', age: 32 }, { name: 'Bob', age: 35 }];
users.map(myFunction);
function myFunction(n) {
  const user = n.age;
  console.log(user); // function scope
}

// console.log(user);  // Global scope
// ReferenceError: user is not defined


const persons = [
  { name: 'John', age: 23, job: 'Marketing Officer'},
  { name: 'Alice', age: 27, job: 'Doctor'},
  { name: 'Bob', age: 25, job: 'Textile Engineer'}
];

const allJobs = persons.map(person => person.job);
console.log(allJobs);
