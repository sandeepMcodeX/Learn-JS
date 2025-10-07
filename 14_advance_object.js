// const tinderUser = new Object()     //singleton object 
// const tinderUser = {}             //not singleton object 
// console.log(tinderUser);



const tinderUser ={};
 tinderUser.id = "123nbhj"
 tinderUser.name="sammy"
 tinderUser.isLoggedIN = false
// console.log(tinderUser);


const regularUser ={
    email:'sandeep@gmail.com',
    fullName:{
        userFullName:{
            firstName:"ankit",
            lastName:'singh',
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"c", 4:"d"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1 , obj2)
// target , source 
// const obj3 = Object.assign({} , obj1 , obj2)
// const obj3 = {...obj1 , ...obj2};
// console.log(obj3);


const user =[
    {   
        id:1,
        email:'h@gmail.com'
    },
    {   
        id:2,
        email:'s@gmail.com'
    },
    {   
        id:3,
        email:'k@gmail.com'
    },
    {
        id:4,
        email:'f@gmail.com'
    }
]
user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));    // all keys (array)
console.log(Object.values(tinderUser));    // all values 
console.log(Object.entries(tinderUser));    // all entries  

console.log(tinderUser.hasOwnProperty("isLoggedIN"));   //true 

