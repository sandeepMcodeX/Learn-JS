// for of
// ["", "" , ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  // console.log(num);
}
const greeting = 'Helloworld';
for (const greet of greeting) {
  // console.log(`Each char is ${greet}`);
}

// Maps (unique value)
// const map = new Map()
// map.set('IN', "India");
// map.set('USA', "United States of America");
// map.set('Fr', "France");
// map.set("IN", "India");
// console.log(map);

// for (const [key, value] of map) {
//     console.log( `${key}:- ${value}`);
// }

const myObject = {
  game1: 'NFS',
  game2: 'GTA5',
};
// myObject are not iterable
// for (const [key, value] of myObject) {
//   console.log(`${key}:- ${value}`);
// }

// for in loop
const myObjectTwo = {
  js: 'javascript',
  cpp: 'c++',
  rb: 'ruby',
  py: 'python',
};
for (const key in myObjectTwo) {
  // console.log(key);
  // console.log(`${key}shortcut is  fro ${myObjectTwo[key]}`);
}

const programming = ['js', 'py', 'cpp', 'rb'];
for (const key in programming) {
  // console.log(key);
  // console.log(programming[key]);
}

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');
map.set('IN', 'India');
for (const key in map) {
  //  console.log(key);
}

// forEach()

const cars = ['verna', 'bmw', 'mustang', 'thar'];
cars.forEach(function (val) {
  //   console.log(val);
});

cars.forEach((item) => {
  //   console.log(item);
});

function printMe(item) {
  // console.log(item);
}
// cars.forEach(printMe)

// cars.forEach((item ,index , arr)=>{
// console.log(item, index , arr);
// })

const myCoding = [
  {
    languageName: 'javascript',
    languageFileName: 'js',
  },
  {
    languageName: 'python',
    languageFileName: 'py',
  },
];

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})
