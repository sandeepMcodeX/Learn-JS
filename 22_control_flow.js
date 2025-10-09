// if statement 

// if(true){
// }
// if(false){
// }

// const isUserLoggedIN = true ;
// if(isUserLoggedIN){
//     console.log(`logged in`);
// }
// <, > , <=, <=, == , !=, !== , ===
// if(2=="2"){
//     console.log("executed");
// }
// if (2 === '2') {
//   console.log('executed');
// }

// const temperature = 35;
// if (temperature ===50) {
//   console.log('less than 50');
// } else {
//   console.log(`temperature is greater than 50`);
// }



// const score = 200;
// if(score>100){
//    const power ="fly"
//    console.log(`User Power:${power}`);
// }
// console.log(`user Power :${power}`);

// const balance = 1000;
// if(balance>500) console.log("test");   //implicit scope  not used 


// if else statement

// const balance  =20090;
//  if(balance<500){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("les than 750 ");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true ;
const debitCard = true ;
const loggedInFromGoogle= false;
const loggedInFromEmail = true

if(userLoggedIn&& debitCard){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail ){
    console.log("User logged in");
}

