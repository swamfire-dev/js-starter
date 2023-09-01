'use strict';

/*
let hasDriversLicense = false
const passTest = true
if (passTest) {
    hasDriversLicense = true
}
if (hasDriversLicense) {
    console.log("I can Drive")
}
*/

/*
// DRY -> Dont Repeat Yourself
function logger() {
    console.log('logger')  // this is a function that will be called in the next line of code
}

//invoking function or calling the function or running the function
logger()
console.log(logger()) // function without any return vars will return undefined
logger()


function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}
let appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)
console.log(fruitProcessor(5, 0))

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)

console.log(Number('23'))
*/

//function declaration
//can call function before its declaration
function calcAge1(birthYear) {
    const age = 2037 - birthYear
    return age
}

console.log(calcAge1(1991))

// Anonymous function or function expression
// cannot use function expressions before declarations
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

console.log(calcAge2(1991))