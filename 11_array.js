// array 




const myArr = [0, 1, 2, 3, 4 , 5 ];
// console.log(myArr[0]);
const myHeors = ['hulk' , 'ironman'];
// console.log(myHeors);


const myArr2 = new Array(1, 2,3 , 4)
// console.log(myArr2[1]);

// array methods 
// myArr2.push(10)
// console.log(myArr2);

// myArr2.pop()
// console.log(myArr2);

// myArr2.unshift(0)
// console.log(myArr2);

// myArr2.shift();
// console.log(myArr2);


// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(91));

const newArr = myArr.join()
// console.log(myArr);   
console.log(newArr);
console.log(typeof newArr);   //string


// slice , splice 
console.log("A" , myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1, 3)
console.log('c', myArr);
console.log(myn2);