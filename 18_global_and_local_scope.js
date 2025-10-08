// let a =10;
// const b = 20;
// var c=30;

// console.log(a);
// console.log(b);
// console.log(c);


{
} //scope
// var c= 300;            //global scope
let a =300
if (true) {             //block scope 
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("Inner:", a );
}

// console.log(a);  //not defined
console.log(b); //not defined
console.log(c); //30

