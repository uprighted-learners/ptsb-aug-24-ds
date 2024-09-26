/* 
? Classes
* templates or blueprints for creating objects
    * they encapsulate data with code
    * JA is prototype-based with access to OOP principles
    * Classes are considered special functions. They can be defined as:
        * class declarations
        * class expressions
        ! Neither are hoisted
*/

class Learner {
    constructor(name, city, cohort) {
        this.name = name
        this.city = city
        this.cohort = cohort
        this.scholarship = 7500
    }
}

// ? Create a new instance of a Learner class
const amy = new Learner("Amy Piche", "Comer, GA", "ptsb-aug-24")
const jonah = new Learner("Jonah Francke", "Essex, VT", "ptsb-aug-24")
console.log(amy, jonah)

/* 
    ? Challenge
    * create a class called House
    * build a constructor asking for address, bedrooms, bathrooms
    * create an instance of said house
    * do it as a class expression
*/

const House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address = address
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
    }
}

// ! Example of Encapsulation
const $139mckim = new House("139 McKim Ave", 3, 2.5)
console.log($139mckim)