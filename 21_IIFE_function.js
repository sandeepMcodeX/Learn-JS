// Immediately Invoked Function Expression (IIFE)
// function chai (){
//     console.log('DB Connected');
// }
// chai();

// remove the global scope pollution use IIFE 
(function chai() {
    // named IIFE
  console.log('DB Connected');
})();    //end line 

// ()() function declared , function call

(()=>{
    // unnamed IIFE
    console.log(`DB Connected Two`);
})();

((name) => {

  console.log(`DB Connected Two ${name}`);
})('sandeep');

