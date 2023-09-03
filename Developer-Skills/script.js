// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 10
if (x === 23) console.log(x)
// console.log("Hello World!!!")

const measureKelvin = function(){
    const measurement = {
        type: "temp",
        unit: "celsius",
        value: Number(prompt("Degrees celsius:")),
    }
    console.table(measurement)
    // console.log(measurement)
    // console.log(measurement.value)
    // console.warn(measurement.value)
    // console.error(measurement.value)
    const kelvin=measurement.value+273
    return kelvin
}
console.log(measureKelvin())
*/


const printForecast = function(arr){
    let returnStr = "... "
    for (let i=0;i<arr.length;i++){
        returnStr += `${arr[i]}C in ${i+1} days ... `
    }
    console.log(returnStr)
    return returnStr
}
printForecast([17, 21, 23])
printForecast([12,5,-5,0,4])