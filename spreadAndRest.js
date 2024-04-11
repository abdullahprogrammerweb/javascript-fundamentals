// The rest and spread operators in JavaScript are powerful tools that make it easier to work with arrays and objects. They were introduced in ECMAScript 6 (ES6) and provide concise ways to handle multiple elements.

/*
Spread Operator (...) Use in Arrays:
The spread operator allows you to expand an array or iterable into individual elements. It is often used for creating copies of arrays, combining arrays, or passing array elements as function arguments.
*/

// working as array
const arr =[1,2,3,4,56,67,0]
const copyArr = [...arr]
console.log(copyArr)


const arr1 = [1,2,3,4,5,6]
const arr2 = [0,9,9,20,2]
const mergedArr = [...arr1,...arr2]
console.log(mergedArr)

// working as object
const details = {
    name:'Abdullah',
    task:'programming',
    age:'18'
}
const EductionAbdullah = {
    school:'metroploitan school',
    college:'delhi college'
}
const AbdullahFullDetails = {...details,...EductionAbdullah}
console.log('getAbdullahDetails', AbdullahFullDetails )

// Key Points:
// The spread operator is used for expanding elements (copying or combining), while the rest operator is used for collecting elements (capturing multiple function arguments into an array).
// Both operators use the same syntax (...), but their usage depends on the context in which they are applied.
// Understanding these operators is essential for writing concise and expressive JavaScript code, especially when working with arrays and functions that take a variable number of arguments.
