// Date objects represent a single moment jan 1 1970
//  date calculate in miliseconds


let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());

console.log(typeof myDate);    //object



// let myCreateDate = new Date(2023, 0 , 23)
// let myCreateDate = new Date(2023, 0 , 23 , 5 , 3)
// let myCreateDate = new Date("2023-01-14")
// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("01-14-2023")


// console.log(myCreateDate.toLocaleDateString());


// Time 
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// miliseconds
console.log(Math.floor(Date.now() / 1000));


// current 
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// customize
console.log(newDate.toLocaleDateString('default' , {
    weekday:"long"
}));











// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());