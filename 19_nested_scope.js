
function one() {
  const username = 'sandeep';
  function two() {
    const websites = 'youtube';
    console.log(username);
  }
//   console.log(websites);        //not defined not accessible 
  two();
}
// one();



if(true){
    const username ="sandeep"
    if(username==="sandeep"){
        const websites =" discord"
        console.log(username + websites);
    }
    // console.log(websites);   
}
// console.log(username);


// interesting
// hoisting in javascript
console.log(addOne(5));
function addOne(num){
     return num+1;
}
// addOne(5);



// addTwo(5);
const addTwo = function(num){
   return num+2
}



