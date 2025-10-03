let scoreOne = 33;

// console.log(typeof scoreOne);   //number
// console.log(typeof(scoreOne));  

let score = "33";    // string
// let valueInNumber = Number (score);
// console.log(typeof valueInNumber);    //number
// console.log(valueInNumber);           //33

let scoreTwo = "33abc"
let valueInNumberTwo = Number(scoreTwo);
console.log(typeof valueInNumberTwo);    //number
console.log(valueInNumberTwo);           //NaN (Not a Number)

let scoreThree = null ;
let valueInNumberThree = Number(scoreThree)
console.log(typeof valueInNumberThree);    // number
console.log(valueInNumberThree);          //0

let scoreFour = undefined ;
console.log(scoreFour);
console.log(typeof scoreFour);
let valueInNumberFour = Number(scoreFour)
console.log(typeof valueInNumberFour);    // number
console.log(valueInNumberFour);          // NaN


let scoreFive = true;
console.log(scoreFive);   //true
console.log(typeof scoreFive);   //boolean
let valueInNUmberFive = Number(scoreFive);   
console.log(typeof valueInNUmberFive); // number
console.log(valueInNUmberFive);      //    1



let scoreSix = "sandeep";
console.log(scoreSix);
console.log(typeof scoreSix);  //string
let valueInNumberSix = Number(scoreSix);
console.log(typeof valueInNumberSix);  // number
console.log(valueInNumberSix);   //NaN


// "33" =>33
// "33abc"  =>NaN
// true => 1;
// false => 0

let isLoggedIn = 1;

let booleanIsLoggedIN = Boolean(isLoggedIn)
console.log(booleanIsLoggedIN);  //true

// let isLoggedInTwo=""  // empty string
let isLoggedInTwo ="sandeep"
let booleanIsLoggedInTwo = Boolean(isLoggedInTwo)
console.log(booleanIsLoggedInTwo);  // false   , // true

// 1 =>true;
// 0 =>false;
// "" =>false;
// "sandeep" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);      // 33
console.log( typeof stringNumber);      // string



/*
JavaScript is a dynamically typed language, so it allows converting data from one type to another manually using conversion functions like Number(), String(), and Boolean()





*/