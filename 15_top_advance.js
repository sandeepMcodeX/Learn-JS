// destructing object 

const course ={
    courseName:'js in hindi',
    price:"999",
    courseInstructor :'sandeep',
}
// course.courseInstructor

// const {courseInstructor } = course
const {courseInstructor:instructor } = course
// console.log(courseInstructor);
console.log(instructor);


// API
// in object 
// JSON
// {
//    "name":'sandeep',
//    "courseName":"js in hindi",
//    "price":"free",
// }


// in array 
// [

//     {},
//     {},
//     {}
// ]


