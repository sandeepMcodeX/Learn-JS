const programming = ['js', 'py', 'cpp', 'rb'];
//  const values = programming.forEach((item)=>{
    // console.log(item);
    // return item 
// })
// console.log(values);    //return undefined


// filter
const myNums =[1, 2, 3, 4, 5, 6, 7, 8,9 ,10];
//  const newNums = myNums.filter((num)=>num>4)
// const newNums = myNums.filter((num)=>{
//     return num> 4
// })
// console.log(newNums);

// forEach()
// const newNums = [];
// myNums.forEach((num)=>{
//     if(num<4){
//         newNums.push(num);
//     }
// })
// console.log(newNums);

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userBooks = books.filter((item)=>item.genre ==='History');
// const userBooks = books.filter((item)=>item.publish >=2000);
const userBooks = books.filter((item)=>{
           return item.publish >=1900 && item.genre ==='History'
})
console.log(userBooks);

const myNumber = [1, 2, 3,4, 5, 6,7, 8,9, 10]
//  const newMyNumber = myNumber.map((num)=>{
//     const addedValue = num+10;
//     return addedValue;
// })

const newNums = myNumber.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
console.log(newNums);



// reduce
const myNumsTwo = [1, 2, 3];
// const myTotal = myNumsTwo.reduce(function(acc, current){
//     console.log(`acc:${acc} and current: ${current}`);
//     return acc+current;
// }, 0)
const myTotal = myNumsTwo.reduce((acc, curr)=>acc+curr, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName:'js course',
        price:2999,
    },
    {
        itemName:'python course',
        price:1999,
    },
    {
        itemName:'mobile dev course',
        price:4999,
    },
    {
        itemName:'data science course',
        price:3999,
    },
    
]


const priceToPay = shoppingCart.reduce((acc ,item )=>acc+ item.price, 0)
console.log(priceToPay);
