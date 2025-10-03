

// stack memory are primitive (copy )
// In stack a copy of the value is stored.
// Changing one doesn’t affect the other.

let myHouseName = "happy";
let anotherHouseName = myHouseName;  // a copy is made
anotherHouseName = "sandeep";

console.log(anotherHouseName);  // "sandeep"
console.log(myHouseName);       // "happy"

// myHouseName holds the original "happy"
// anotherHouseName is a separate copy, so changing it does not affect the original




// heap memory are non primitive (reference)
// In heap, reference (address) is stored, not a copy
// Changing one affects the other
let userOne = {
    email: 'user@google.com',
    upi: "7665758"
};

let userTwo = userOne; // both point to the same object in memory

userTwo.email = "sandeep@gmail.com";

console.log(userOne.email);  // "sandeep@gmail.com"
console.log(userTwo.email);  // "sandeep@gmail.com"

// userOne and userTwo both point to the same object in memory
// So changing userTwo.email also updates userOne.email

