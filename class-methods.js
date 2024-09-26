/* 
    ? Class Methods
    * method is a function that lives inside of a class
    * can be used on any class instance
*/

const crypto = require("crypto")

class Account {
    constructor(type, name, ssn, balance) {
        this.type = type
        this.name = name
        this.ssn = ssn
        this.balance = balance
        this.acctNo = this.generateAcctNo()
    }

    generateAcctNo() {
        return crypto.randomBytes(16).toString("hex")
    }

    deposit(amt) {
        this.balance += amt
    }

    // ! Abstraction Example
    withdraw(amt) {
        return this.balance < amt ? "Insufficient funds" : this.balance -= amt
    }
}

// ! Examples of Polymorphism
const amyChecking = new Account("checking", "Amy Piche", "666010000", 1000000)
console.log(amyChecking)
const williamSavings = new Account("savings", "William Scott", "666090909", 25000)

amyChecking.deposit(500)
williamSavings.deposit(1000)

/* 
    ? Class Inheritance
    * extends a parent class with a child class
*/

// ! Inheritance Example
class MinorAccount extends Account {
    constructor(type, name, ssn, balance, isMinor) {
        super(type, name, ssn, balance)
        // allows us to access properties and methods of a parent class
        this.isMinor = isMinor
    }

    waiveOverdraft() {
        this.balance -= 35
    }
}

const paulsMinorChecking = new MinorAccount("checking", "Paul Niemczyk", "666010101", 500, true)
console.log(paulsMinorChecking)
paulsMinorChecking.deposit(1000)
console.log(paulsMinorChecking.balance)
