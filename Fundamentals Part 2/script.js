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

/*
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
*/

/*
const friends = ["SwamFire", "HeatBlast", "XLR8"]
console.log(friends)

const years = new Array(1991, 1984, 2000, 2020)
console.log(years)
console.log(friends[0], typeof friends[0])
// console.log(friends[1], typeof friends[1])
// console.log(friends[2], typeof friends[2])
console.log("friends length", friends.length)
console.log("last element", friends[friends.length - 1])

//Array Update
friends[0] = "FourArms"
console.log(friends)
console.log(friends[0], typeof friends[0])

// friends = ["EchoEcho", "DiamondHead"]
// console.log(friends)

const firstName = "X"
const x = [firstName, "Y", 2037 - 1991, friends]
console.log(x)
console.log(x.length)

//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}
const y = [1990, 1967, 2002, 2010, 2018]
console.log(calcAge2(y))
console.log(y + 10)

const age1 = calcAge2(y[0])
console.log(age1)
const age2 = calcAge2(y[1])
console.log(age2)
const age3 = calcAge2(y[2])
console.log(age3)
const ages = [1991,
    job: "teacher"calcAge2(y[0]), calcAge2(y[1])]
console.log(ages)
console.log(ages.length)
*/

/*
const friends = ["SwamFire", "HeatBlast", "XLR8"]
console.log(friends)

//Add elements
let newLength = friends.push("DiamondHead")
console.log(friends)
console.log(newLength)

//add at beginning
friends.unshift("EchoEcho")
console.log(friends)

//remove element
const popped = friends.pop()
console.log(friends)
console.log("popped element", popped)
const shifted = friends.shift()
console.log(friends)
console.log("shifted element", shifted)

// get index of element
console.log("indexOf of SwamFire", friends.indexOf("SwamFire"))
console.log("indexOf of HeatBlast", friends.indexOf("HeatBlast"))

console.log(friends.includes("SwamFire"))
console.log(friends.includes("Ben10"))

friends.push(23)
console.log(friends)
console.log(friends.includes(23))

if (friends.includes("SwamFire")) {
    console.log("you have friend named SwamFire")
}
*/

/*
const obj = {
    firstName: "Swam",
    lastName: "Fire",
    age: 2037 - 1991,
    job: "Teacher",
    friends: ["EchoEcho", "XLR8", "FourArms"]
}

console.log(obj)
console.log(typeof obj)

//object retrieval
console.log(obj.age, obj["age"])
console.log(obj.lastName, obj["lastName"])
const interestedIn = prompt("What do you want to know? choose between firstName, lastName, age, job, friends")
// console.log(obj[interestedIn])
// alert(obj[interestedIn])
if (obj[interestedIn]) console.log(obj[interestedIn])
else console.log("Wrong request")

//add new properties to object
obj.location = "INDIA"
obj["state"] = "Maharashtra"
console.log(obj)

//challenge
console.log(`${obj.firstName} has ${obj.friends.length} friends, and his best friend is called ${obj.friends[0]}`)
*/

const obj = {
    firstName: "Swam",
    lastName: "Fire",
    birthYear: 1991,
    job: "Teacher",
    friends: ["EchoEcho", "XLR8", "FourArms"],
    hasDriversLicense: false,
    // calcAge: function (birthYear) {
    //     // console.log(this)
    //     return 2037 - this.birthYear
    // }
    // calcAge: (birthYear) => { return 2037 - birthYear }
    calcAge: function (birthYear) {
        this.age = 2037 - this.birthYear
        return this.age
    },
    getSummary: function () {
        return `${this.firstName} is ${this.calcAge()} years old ${this.job} and has ${this.hasDriversLicense ? "a" : "no"} drivers license`
    }

}

console.log(obj)
// console.log(obj.calcAge(1991))
// console.log(obj["calcAge"](1991))
console.log(obj.calcAge(obj.birthYear))
console.log(obj["calcAge"](obj.birthYear))
console.log(obj)

//challenge
// "Jonas is 46 year old teached and has drive a/no drivers license"
console.log(obj.getSummary())
