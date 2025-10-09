// Javascript Execution context 
// Global execution context ( browser this window object)
// single threaded 


// 1 Global execution context
// 2 function execution context
// 3 eval execution context 

// Two phase 
// memory creation phase 
// execution creation phase 


let val1 = 10;
let val2 = 20;
function addNum (num1, num2){
    let total = num1+num2;
    return total;
}
let result1 = addNum(val1 , val2);
let result2= addNum(10 , 20)

// call stack  --> last in first out
