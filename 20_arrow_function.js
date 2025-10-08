
const user ={
    username:'sandeep',
    price:9909,
    welcomeMessage :function(){
        // current context 
        console.log(`${this.username} welcome to website `);
        console.log(this);
    }

}
// user.welcomeMessage();
// // current value
// user.username="sam"
// user.welcomeMessage();
// console.log(this);          //empty object 


// function chai(){
//     let userName="sandeep"
//     // console.log(this);
//     // console.log(this.username);       //undefined  not used
// } 
// chai()


// const chai = function(){
//   let userName = 'sandeep';
// console.log(this.username);       
// }
// chai();


// arrow function in javascript 

const chai=()=>{
//   let userName = 'sandeep';
//   console.log(this.username);
//   console.log(this);    //{}
}
chai()

// pure arrow functions
// ()=>{}
// const addTwo =(num1 , num2) =>{
//     return num1+num2
// }
// console.log(addTwo(3, 5));

// implicit return 
// const addTwo =(num1 , num2) => num1+num2
// console.log(addTwo(3, 5));

const addThree = (str) => ({username:"sandeep"});
 console.log(addThree());

 
//  const myArray = [2, 5, 6, 7, 9];
//  myArray.forEach()
    
