/* 
    ? Array
    * list-like object
    * reference data type
    * denoted by [ ]
    * holds multiple data types
    * content can be accessed by their index
*/

// ? Array creation using array literal
let arr = []
console.log(typeof arr, arr)
console.log(arr instanceof Array)

// ? Array creation using Array constructor
let arrConst = new Array
console.log(arrConst)

// ? How would we check if an array is empty?
console.log(Boolean([]))

arr.length === 0 ? console.log("Empty") : console.log("Not empty")

// Let's create a fx that checks if array is empty
// Return true/false

function isArrayEmpty(arr) {
    if (arr.length !== 0) return
    return true

    // if (arr.length === 0) {
    //     return true
    // } else {
    //     return false
    // }
}

console.log(isArrayEmpty(arrConst))

// ? Assignment
let carMake = ["BMW", "Maserati", "Audi", "Mercedes"]
console.log(carMake)

console.log(carMake[0])

// ? Reassignment
carMake[2] = "MINI"
console.log(carMake)

// ? Nesting
carMake[carMake.length] = ["IN", "IL"]
console.log(carMake)

// ? Accessing nested values
console.log(carMake[4][1])

// ? Arrays can have many different data types
let manyDataTypes = [
    "string",
    [1, 5, 6, true, "some other string"],
    false,
    undefined,
    null,
    true,
    NaN,
    "another strings"
]

console.log(manyDataTypes)

// ? Array Methods (before array methods existed)

let movies = ["Mad Max", "Pacific Rim", "Back to the Future"]

movies[movies.length] = "Avengers"

function addd(arr, item) {
    arr[arr.length] = item
    return arr.length
}
console.log(movies)
console.log("THIS SHOWS THE NUMBER", addd(movies, "Mission Impossible"))
console.log("THIS", movies)

/* 
    ? .push()
    * adds element to the end of an array
    * returns new length of an array
*/

let pushReturn = movies.push("Mean Girls")
console.log("Value", movies, "Return of .push()", pushReturn)

/* 
    ? .pop()
    * removes last array element
    * returns the last element
    * if array is empty, it returns undefined
*/

let popReturn = movies.pop()
console.log("Value", movies, "Return of .pop()", popReturn)

/* 
    ? .unshift()
    * adds element to the beginning of an array
    * returns the length of an array
*/

let unshiftReturn = movies.unshift("John Wick")
console.log("Value", movies, "Return of .unshift()", unshiftReturn)

// ? Challenge -- how would we write this method?

function addToFront(arr, item) {
    // TODO: take existing array move one space right and add item to the beginning
 

}

/* 
    ? .shift()
    * removes the first element from an array
    * returns removed element
    * if array is empty, it returns undefined
*/

let shiftReturn = movies.shift()
console.log("Value", movies, "Return of .shift()", shiftReturn)

/* 
    ? .at()
    * takes an integer (positive or negative for forward/backward count)
    * returns items at that index
*/

console.log(movies.at(-1))

/* 
    ? .join()
    * creates and returns str joining all arr element using separator
*/

console.log(movies.join(" "))

/* 
    ? flat()
    * recursively tears down nested arrays and groups values into single outermost array
*/

let flatCars = carMake.flat()

/* 
    ? .sort()
    * sorts array elements
    * default -> ascending
    * mutates the original array
*/

flatCars.sort()
console.log(flatCars)

/* 
    ? .concat()
    * merges separate arrays
*/

let gibberish = flatCars.concat(movies)
console.log(gibberish)

if (gibberish.includes("BMW")) {
    console.log("Great cars")
}