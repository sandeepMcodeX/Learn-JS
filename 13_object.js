// object declared to way 
// 1 literal 
// 2 constructor 

// singleton  
// Object.create;


// object literals 
const mySym = Symbol("key1");

const jsUser = {
    name:'sandeep',
    "schoolName" :'rani axmi bai school',
    [mySym]:"mykey1",     //symbol
    age:18,
    location:'delhi',
    email:'sandeep@gamil.com',
    isLoggedIn:false,
    lastLoginDays:["Monday" , "Saturday"],
};

console.log(jsUser.email);
console.log(jsUser["email"]);
// console.log(jsUser["schoolName"]);
// console.log(jsUser.mySym);      // mykey1
// console.log(typeof jsUser[mySym]);  //string 

console.log(jsUser[mySym]);




jsUser.email ="happy@gmail.com"     
console.log(jsUser);              //change 
// Object.freeze(jsUser);
// jsUser.email = 'samyii@gmail.com'; //not change




jsUser.greeting = function(){
    console.log("Hello js User");
}
// console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greetingTwo =function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(jsUser.greetingTwo());