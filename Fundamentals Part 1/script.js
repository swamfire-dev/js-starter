/*
let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!!!");
// console.log(40 + 8 + 23 - 11)
// console.log("Swamfire")
// console.log(23)
*/

/*
let firstName = "Swamfire"
// // alert(firstName)
// console.log(firstName)
// console.log(firstName)
// console.log(firstName)
let first_name = "SwamFire"
let $first_name = 'SwamFire'
// console.log(first_name)
// console.log($first_name)
*/

// Always use descriptive names for your vars

/*
// Assignment
let country = "INDIA"
let continent = "Asea"
let population = 12345
console.log(country, continent, population)
*/

/*
Primitive Datatypes
1. Number
2. Strings
3. Booleans
4. null
5. undefined
6. Symbol
7. BigInt
*/

/*
// console.log(typeof 1)
// console.log(typeof "SwamFire")
// console.log(typeof true)
// console.log(true)
let JavaScriptIsFun = true
// console.log(JavaScriptIsFun)
// console.log(typeof JavaScriptIsFun)
JavaScriptIsFun = 1
// console.log(JavaScriptIsFun)
// console.log(typeof JavaScriptIsFun)

let year
console.log(year)
console.log(typeof year)

year = 2023
console.log(year)
console.log(typeof year)
*/

/*
let age = 30
age = 31
const birthYear = 2020
// birthYear = 2023
// const job
var job = "Programmer"
job = "Teacher"

lastName = "SwamFire"
console.log(lastName)
console.log(typeof lastName)
*/

/*
const now = 2030
const ageSwam = now - 2020
const ageFire = now - 2010
// console.log(ageFire, ageSwam)
// console.log("multiply", ageFire * 2)
// console.log("divide", ageFire / 2)
// console.log("exponential", 2 ** 3)

// const firstName = "Swam"
// const lastName = "Fire"
// console.log("string concat", firstName + lastName)

// let x = 10 + 5
// console.log(x)
// x += 10
// console.log(x)
// x *= 4
// console.log(x)
// x++
// console.log(x)
// x--
// console.log(x)

console.log(ageFire > ageSwam)
// >, <, <=, >=
console.log(ageFire >= 10)

const isFullAge = ageFire >= 10
console.log(now - 2020 >= now - 2010)
*/

/*
const now = 2030
const ageSwam = now - 2020
const ageFire = now - 2010
console.log(now - 2020 >= now - 2010)
let x, y
x = y = 20 - 10 - 5
console.log(x, y)
const averageAge = (ageFire + ageSwam) / 2
console.log(ageFire, ageSwam, "average age-", averageAge)
*/

/*
const firstName = "SwamFire"
const job = "teacher"
const birthYear = 2020
const year = 2030
const str = "I'm " + firstName + ", a " + (year - birthYear) + " old " + job + "!"
console.log(str);
const strNew = `I'm ${firstName}, a ${year - birthYear} old ${job}!`
console.log(strNew)
const multiLineStr = `String
Multiple
lines`
console.log(multiLineStr)
*/

/*
const age = 19
const isOldEnough = age >= 18
if (isOldEnough) { console.log("SwamFire can start driving license.") }

const age1 = 15
if (age1 >= 18) {
    console.log("SwamFire can start driving license.")
}
else {
    const yearsLeft = 18 - age1
    console.log(`SwamFire wait for ${yearsLeft} years`)
}

const birthYear = 1990
let century
if (birthYear <= 2000) {
    century = 20
}
else {
    century = 21
}
console.log(century)
*/

/*
const inputYear = `1991`
console.log(Number(inputYear), typeof Number(inputYear))
console.log(Number(inputYear) + 18)

console.log(Number("jonas"), typeof NaN, Boolean(NaN))

console.log(String(23), typeof String(23), 23)
*/

/*
console.log("I am " + 23 + " years old")
console.log("23" - "10" - 3)
console.log("23" + "10" + 3)
console.log("23" / "2")

let n = "1" + 1
n = n - 1
console.log(n)
*/

// 5 default falsy values :- 0, "", undefined, null, NaN
// everythiong else is truthy values

/*
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean("SwamFire"))

const money = 10
money ? console.log('You have some money') : console.log('No Money')

if (money) {
    console.log("Dont Spend it all")
}
else {
    console.log("You should get a job")
}

let height = 123
if (height) {
    console.log("Yay! Height is defined")
}
else {
    console.log("Height is undefined")
}
*/

/*
const age = "18"
if (age === 18) console.log("You have just become an adult (strict)")
if (age == 18) console.log("You have just become an adult (loose)")


const favourite = Number(prompt("Whats your favourite number"))
console.log(favourite, typeof favourite)
if (favourite == 23) {
    console.log("23 is an amazing number")
}
if (favourite === 23) {
    console.log("23 is an amazing number")
}
else if (favourite === 7) {
    console.log("7 is also an amazing number");
}
else {
    console.log("number is not 23 nor 7")
}

if (favourite !== 23) {
    console.log("number is not 23")
}
*/

/*
const hasDriversLicense = true
const hasGoodVision = true
console.log(hasDriversLicense && hasGoodVision)
console.log(hasDriversLicense || hasGoodVision)
console.log(!hasDriversLicense)

const shouldDrive = hasDriversLicense && hasGoodVision
if (shouldDrive) {
    console.log("Swamfire is able to drive")
}
else {
    console.log("Someone else should drive")
}

const isTired = false
console.log(hasDriversLicense && hasGoodVision && isTired)
console.log(hasDriversLicense || hasGoodVision || isTired)

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Swamfire is able to drive")
}
else {
    console.log("Someone else should drive")
}
*/

/*
let scoreDolphins = (96 + 108 + 89) / 3
let scoreKoalas = (88 + 91 + 110) / 3
if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy")
}
else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy")
}
else {
    console.log("Both win the trophy")
}
*/

const day = "satur"
switch (day) {
    case 'sunday':
        console.log("its sunday")
        break
    case 'monday':
        console.log("its monday")
        break
    case 'tuesday':
        console.log("its tuesday")
        break
    case 'wednesday':
        console.log("its wednesday")
        break
    case 'thursday':
        console.log("its thursday")
        break
    case 'friday':
        console.log("its friday")
        break
    case 'saturday':
        console.log("its saturday")
        break
    default:
        console.log("its default")
        break

}