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

/*
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
*/

/*
//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear
// console.log(calcAge3(1991))

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear
    const retirement = 65 - age
    return retirement
}
console.log(yearsUntilRetirement(1991))

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retirement = 65 - age
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1980, "EchoEcho"))
console.log(yearsUntilRetirement(1991, "SwamFire"))
*/

/*
function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`
    return juice
}
console.log(fruitProcessor(2, 3))
*/

const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement
    }
    else {
        console.log(`${firstName} has already retired`)
        return -1
    }
    // return retirement
    // return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1991, "SwamFire"))
console.log(yearsUntilRetirement(1970, "HeatBlast"))
console.log(yearsUntilRetirement(1960, "FourArms"))
