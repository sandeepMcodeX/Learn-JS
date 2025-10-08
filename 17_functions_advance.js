
function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(2));
// multiple value 
console.log((calculateCartPrice(200, 300, 5000)));
// rest operator

function calculateCartPriceTwo(val1 , val2 , ...num1) {
  return num1;
}
console.log(calculateCartPriceTwo(400, 500, 900));
// val1 - 400
// val2 - 500

const user ={
    userName:'sandeep',
    // price:199,
    prices:200
}
// how to pass object in function and how to use 
function handleObject(anyobject){
//   console.log(`userame is ${anyobject.userName} and price is ${anyobject.price}`);
  console.log(`userame is ${anyobject.userName} and price is ${anyobject.price}`);
} 
handleObject(user);
handleObject({
    userName:'sam',
    price:399,
})


// pass array 
const myNewArray = [200, 300, 100, 500];
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300 , 800, 600]));

