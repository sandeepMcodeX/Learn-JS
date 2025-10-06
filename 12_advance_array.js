const marvel_heros =["thor" , "spider man"];
const dc_heros = ["superman" , "flash" , "batman"];

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

//  const allheros= marvel_heros.concat(dc_heros)
// console.log(allheros);



// spread operator
const all_new_heroes =[...marvel_heros, ...dc_heros];
console.log(all_new_heroes);


// flat
const another_array =[1, 2, 3, [4, 5, 6], 7, [6, 7 , [4, 5]]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

// condition
console.log(Array.isArray('sandeep'));
// make array 
console.log(Array.from('sandeep'));
// interesting 
console.log(Array.from({name:'sandeep'}));



let score1 = 100;
let score2 = 200;
let score3 =300;
console.log(Array.of(score1, score2, score3));
