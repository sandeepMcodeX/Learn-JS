"use strict";    // treat all JS code as newer version

// alert("hello") //This line won't work in Node.js because alert() is used in browsers only

// console.log(3+
//     3
// )  // code readability should be high , not right way

let name= "sandeep"  //string value 
let age = 18;       //number 
let isLoggedIn = false;   //boolean 

// number => 2 to power 53
// bigint  ==> large number
// string =>" " , "Hello"
// boolean => true/false
// null   => standalone value
// undefined =>  not given a value 
// symbol  => unique


// object   //study in coming lecture
console.log( typeof "sandeep");    //string
console.log( typeof null)         // object  
console.log(typeof undefined);    // undefined



/*
Data Type in Javascript 
A data type means what kind of value a variable holds


Types of Data Types in JavaScript
Primitive Data Types
Non-Primitive (Reference) Data Types


Primitive Data Types
1) Number --> Stores numbers 
let age = 18;
2) String --> Stores text or characters
let name = "Sandeep";
3)Boolean -->Only true or false
let isOnline = true;
4) Undefined --> When a variable is declared but not given any value.
let city;
console.log(city); // undefined
5) NULL --> Means no value or empty
let score = null;
6) BigInt --> For storing very large numbers
let bigNum = 123456789123456789n;
7) Symbol--> Used to create unique values


type of is used to what is the type variable 
example -->
type of


let UserName = "Sandeep";         
console.log(UserName);           //sandeep        
console.log( typeof UserName);    //string     
let userAge = 18;       
console.log(userAge);          
console.log( typeof userAge);  // number
let isStudent = true;        
console.log(isStudent);        // boolean
let hobby;       
console.log(typeof hobby);    // undefined
let location = null;         
console.log( typeof location); //object it is bug in javascript

*/


