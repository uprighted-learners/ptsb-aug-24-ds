let states = [
    "Illinois",
    "Wisconsin",
    "Alabama",
    "New York",
    "Vermont",
    "Indiana", 
    "Massachussets",
    "Ohio",
    "Virginia",
    "West Virginia",
    "Pennsylvania",
    "North Dakota",
    "South Dakota",
    "Oregon",
    "California",
    "Nevada",
    "Arizona",
    "New Mexico",
    "Florida",
    "Louisiana",
    "Texas",
    "New Hampshire",
    "Maine",
    "Rhode Island",
    "Alaska",
    "Connecticut",
    "Montana",
    "Nebraska",
    "Arkansas",
    "Washington",
    "Iowa",
    "Kansas",
    "Oklahoma",
    "Michigan",
    "Minnesotta",
    "Kentucky",
    "Tennessee",
    "Idaho",
    "Utah",
    "Georgia",
    "Mississippi",
    "Missouri",
    "Colorado",
    "Delaware",
    "Hawaii",
    "Maryland",
    "North Carolina",
    "South Carolina",
    "New Jersey",
    "Wyoming"
]
console.log(states.length)

// for (i = 0; i < states.length; i++) {
//     console.log(states[i])
// }

/* 
    ? .forEach()
    * executes a callback fx once for each item in an array
    * callback has three parameters
        * value - iterator
        * index - of each iterable
        * array - the entire array .forEach was called upon
*/

states.forEach((value, index, array) => {
    console.log(value, index, array)
    // console.log(array[index])
})

/* 
    ? Challenge
    * let's use .forEach to go thru an array of numbers [1...10]
    * log each number and its square to the console
*/

let numbers = []
let count = 0
while (numbers.length <= 10) {
    numbers.push(count)
    count++
}

console.log(numbers)

numbers.forEach((no) => console.log(`Number: ${no}, Squared: ${no**2}`))

// Skipping a parameter using underscore '_'
numbers.forEach((_, index, arr) => console.log(index, arr))

/* 
    ? .map()
    * creates an array with elements resulting from the callback fx
*/

// let lowercaseStates = []
// states.forEach((state) => {
//     lowercaseStates.push(state.toLowerCase())
// })
// console.log(lowercaseStates)

const lowercaseStates = states.map((state) => state.toLowerCase())
console.log(lowercaseStates)

const grades = [22, 57, 98, 72, 53, 84, 3]
/* 
    ? Challenge
    * utilize map to raise the grade by 15 points for everyone
    * those above 90 should not get any points
*/

const curvedGrades = grades.map((grade) => grade > 90 ? grade : grade + 15)
// const curvedGrades = grades.map(grade => {
//     if (grade > 90) {
//         return grade
//     } else {
//         return grade + 15
//     }
// })
console.log(curvedGrades)

/* 
    ? .filter()
    * creates a new array based on a filter function
    * only filtered items added to an array
    * the values are not able to be modified
*/

const startsWithI = states.filter(state => state[0] === "I")
console.log(startsWithI)

const startsWithAandI = states.filter(state => {
    if (state[0] == "I") {
        return state
    } else if(state[0] == "A") {
        return state
    }
})

console.log(startsWithAandI)

/* 
    ? .reduce()
    * calls callback on arr elements with calculation of preceeding element
    * start value is initialValue or [0] of an array on which it's called
*/

console.log(numbers)
// let thisCount = 0
// numbers.forEach(i => thisCount += i)
// console.log(thisCount)

let sum = numbers.reduce((prevValue, currValue) => {
    return prevValue + currValue
})

console.log(sum)

/* 
    ? Coding Challenge
    * there is an array of swings to make it into a hole
    * swings at 2nd and 5th hole are Par 3
    * swings at 4th and 8th hole are Par 5
    * swings at any other hole are Par 2
    HINT: in golf, a par earns zero points if its made in par amount of swings
    anything under par earns negative points
    anything over par earns positive points

    Ex: if im at a par 5 hole and make it in two sings, i get -3 points

    * calculate the total points

    HINT: think of this in pseudo code
*/
let golfScore = 0
const swings = [1, 2, 5, 7, 3, 4, 2, 1, 8]

for (i in swings) {
    console.log(i, swings[i])
    if (i == 1 || i == 4) {
        golfScore += swings[i] - 3
    } else if ( i == 3 || i == 7) {
        golfScore += swings[i] - 5
    } else {
        golfScore += swings[i] - 2
    }
}

let golfScoreReduce = swings.reduce((total, score, i) => {
    if (i == 1 || i == 4) {
        total += score -3
    } else if (i == 3 || i == 7) {
        total += score - 5
    } else {
        total += score - 2
    }
    return total
})

console.log(golfScoreReduce)

console.log(numbers)


const cars = ["BMW German", "Audi German", "Porsche German", "Maserati Italian", "AstonMartin British", "Bentley British"]

let germanCarsLowercase = cars
.filter(car => car.includes("German"))
.map(germanCar => germanCar.toLowerCase())

console.log(germanCarsLowercase)

/* 
    * use filter() to create an array of even numbers
    * use map() to create an array where each number is doubled
    * use find() to get the first number greater than 7
    * use forEach() to log each nmber and its square to the console (DONE)
    * use reduce() to calculate the sum of all numbers (DONE)
    * use method chaining to create an array of the squares of odd numbers
*/

console.log(numbers)

// function something(value) {
//     return value % 2 == 0
// }

const evenNumbers = numbers.filter(value => value % 2 == 0)
console.log(evenNumbers)

const doubledNumbers = numbers.map(no => no*2)
console.log(doubledNumbers)

const evenNDoubledNumbers = numbers.filter(v => v % 2 == 0).map(v => v*2)
console.log(evenNDoubledNumbers)

const greaterThanSeven = numbers.find(no => no > 7)
console.log(greaterThanSeven)

const squaresOfOdd = numbers.filter(no => no % 2 != 0).map(no => no**2)
console.log(squaresOfOdd)

const words = ['apple', 'dog', 'banana', 'cat', 'umbrella']

const shortWords = words.filter(w => w.length < 5)
console.log(shortWords)

words.forEach((w, i) => console.log(`Word: ${w}, Index: ${i}`))


const word = words.reduce((str, w) => {
    return str += " " + w
})

console.log(word)


let firstArray = ["Paul", "Corey", "Nick"]

// -------------------- shallow copy ------------------------------

// let secondArray = firstArray
// console.log(secondArray)

// secondArray.push("Kayla")
// console.log(secondArray)

console.log(firstArray)


// ---------------------------- deep copy --------------------------

let secondArray = firstArray.map(i => i)
console.log(secondArray)
secondArray.push("Kayla")
console.log(secondArray, firstArray)

// let instructor = "Paul"
// let ta = instructor
// console.log(ta)
// ta = "Nick"
// console.log(ta)
// console.log(instructor)

