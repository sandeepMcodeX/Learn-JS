// const
const accountId = 156889;             // Create a constant variable , assign numeric value 
// let 
let accountEmail ="sandeep@google.com";  // create variable using let , assign string  value
// var
var accountPassword = "12345"           
// accountCity ="uttar pradesh";   //not good practice

let accountState;   //declare variable without value 


// accountId = 2    // not allowed because we use const
accountEmail = "panda@gmail.com"   // allowed because we use let 
accountPassword ="890890";         //allowed because it is var 
// accountCity="delhi";
// console.log(accountId);        156889


/*
Prefer no to use var 
because of issue in block scope and functional scope
*/


// It print output in table form
console.table([accountId , accountEmail , accountPassword , accountCity , accountState])








/*


Variables in Javascript -->
A variable is a named container for storing data.
variables can store numbers, strings, objects, arrays, functions, etc
A variable is like a labeled jar. You can put something inside, take it out, or replace it.


Three Ways to Declare Variables

var  (old method , not recommended)
let  (Modern , preferred)
const  (For Fixed , constant values ,preferred)

var ==>
Introduced in early versions of JavaScript.
Function-scoped
Can be re-declared and re-assigned
Is hoisted 

var name = "Sandeep";
name = "Ravi";
var name = "Amit";  // Allowed


let ==>
Introduced in ES6 (2015)
Block-scoped
Can be re-assigned, but not re-declared in the same scope
Is hoisted but not initialized 

let age = 25;
age = 30;           //  allowed
// let age = 35;     not allowed in same block


const ==>
Introduced in ES6 (2015)
Block-scoped
Cannot be re-assigned or re-declared
Must be initialized at the time of declaration

const country = "India";
// country = "USA";  not allowed

JavaScript is Dynamically Typed
A variable’s type can change at any time

let x = 100;      // number
x = "hello";      // string
x = true;         // boolean

practice ==>
let useName = 'sandeep";
let userAge =18;
const country ="India";


let cartItems = 3;
cartItems = cartItems + 1; // Updated

let temperature = 32;
temperature = 33; // Updated temperature



*/

