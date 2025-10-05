const name="sandeep";
const repoCount = 13;
// console.log(name+repoCount +"value");  not used outdated
console.log(` Hello my name is ${name} and my repo count is ${repoCount}`);


// object created 
const gameName = new String ('sandeep');
console.log(typeof gameName);    //object 

console.log(gameName[0]);  //s
// prototype 
// console.log(gameName.__proto__);   

// prototype methods 
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));


const newString= gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-8, 3)
console.log(anotherString);


const newStringOne = "   sandeep    "
console.log(newStringOne.trim());

// url 
const url ="https://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20" , "-"));

console.log(url.includes('hitesh'));

const newStringTwo = 'sandeep-sm-com'
console.log(newStringTwo.split("-"));