// Primitive data type are call by value
// types 7
// String
// Number
// BigInt
// Boolean
// null
// undefined
// Symbol

const score = 100;                  // Number
const scoreVale = 100.3;           // Number

const isLoggedIn = false;          // Boolean
const outsideTemp = null;          // null (means empty)
let userEmail;                     // undefined (no value assigned)


// symbol are unique
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);   // false, even if both look same


// const bigNumber =876874589787n;

// non primitive data type are call by reference
// array , object , functions

const heros = ['ironman ', 'captain', 'hulk', 'gover'];
console.log(heros);
const userDetail = {
  firstName: 'sandeep',
  lastName: 'maurya',
  age: 12,
};
console.log(userDetail);

const myFunction = function () {
  console.log('Hello world');
};
myFunction();
