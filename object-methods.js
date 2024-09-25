/*
    ? Object Methods
    * functions which work on a particular object type
    * have access to the global scope
    * require "this" to have access to the object scope
*/

let balance = 25

const jonahChecking = {
    name: "Jonah Francke",
    acct: 12557893,
    routing: 111111,
    type: "checking",
    balance: 0,

    checkBalance() {
        return `The balance is ${this.balance}`
    },

    deposit: function(amt) {
        this.balance += amt
        return `The balance is ${this.balance}`
    },

    withdraw: function(amt) {
        return this.balance < amt
            ? "LOL U BROKE"
            : this.balance -= amt
    }
}

console.log(jonahChecking.checkBalance())
jonahChecking.deposit(250000)
console.log(jonahChecking)
console.log(jonahChecking.withdraw(45000))
console.log(jonahChecking.balance)

/* 
    ? Challenge
    * create a method called withdraw that will take amt parameter
    * substract the amount from the balance
    ! SPICEY MODE
    * error handle an instance where a withdraw will cause balance go to below 0
*/

const toDo = {
    today: [],
    tomorrow: [],
    urgent: [],

    add(item, list) {
        const toDoLists = Object.keys(this)
        if (!toDoLists.includes(list) && typeof list === "string") {
            console.log(`Incorrect list, here are your options (strings) ${toDoLists}`)
            return
        }

        if (typeof item !== "string") {
            console.log("Items must be strings")
            return
        }
        
        this[list].push(item)
    },

    clearToDo() {
        this.today = []
        this.tomorrow = []
        this.urgent = []
    },

    remove(item, list) {
        this[list] = this[list].filter(i => i !== item)
    }
}

toDo.add("eat dinner", "urgent")
toDo.add("take dog out", "today")
toDo.add("go to work", "tomorrow")
toDo.add("drop off artwork", "tomorrow")
toDo.add("dentist", "tomorrow")
toDo.add("buy flowers", "tomorrow")
toDo.add("grocery shopping", "tomorrow")
toDo.add("teach a cohort", "tomorrow")
// toDo.clearToDo()
toDo.remove("dentist", "tomorrow")
console.log(toDo)

