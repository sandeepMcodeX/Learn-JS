const score = 400
console.log(score);

// object defined 
const balance = new Number (100)
console.log(balance);

console.log(balance.toString())      //string 
console.log(balance.toString().length);


console.log(balance.toFixed(2));

// precision ( before decimal )
const OtherNumber = 23.9088;
console.log(OtherNumber.toPrecision(3));

const hundreds =1000000000
// console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// Number 
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);




// maths
console.log(Math);
console.log(Math.abs(4));
console.log(Math.abs(-4));

console.log(Math.round(9.3)); 

console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.min(3, 4, 5, 6, 7));


// console.log(Math.random()*10+1);
console.log(Math.random()*10 +1);
console.log(Math.floor(Math.random()*10+1));


const min= 10;
const max=20;

console.log(Math.floor(Math.random() * (max - min + 1))+min);       