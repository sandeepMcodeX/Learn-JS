

// function addTwoNumber(number1, number2) {
//   // console.log(number1+number2);
// //   let result = number1 + number2;
// //   return result;
// //   console.log("hgnj");   //not work
// return number1 +number2
// }
// addTwoNumber(2,4)     //6
// addTwoNumber(2,"4")    //24
// addTwoNumber(6, null)

// const result = addTwoNumber(3, 5);
// console.log(result);    //undefined


function loginUserMessage(username ="sammy"){
    // if(username===undefined){
    //     console.log("please enter the username");
    //     return
    // }
    if(!username){
        console.log("please enter the username");
        return
    }
    return ` ${username} just logged in`
    
}
// console.log(loginUserMessage('sandeep'));  // sandeep just logged in 
console.log(loginUserMessage());           //undefined 