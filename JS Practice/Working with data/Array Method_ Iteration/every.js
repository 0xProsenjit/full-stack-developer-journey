//syntax
/*
array.findIndex(callback(element, index, array), {
return element for newArray;
}, thisArg);
*/

const nums = [21, 22, 34, 44, 55];
const allaboveTwenty = nums.every(num => num >= 20);
console.log(allaboveTwenty);


const cars = [
  { name: 'BMW', country: 'Germany' },
  { name: 'Marcrdes', country: 'Germany' },
  { name: 'Audi', country: 'Germany' }
];

const allaboveMatch = cars.every(car => car.country === 'Germany');
console.log(allaboveMatch);
