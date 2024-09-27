class Account {
    // Static Factory Method
    static createAccount(type, balance) {
        return new Account(type, balance)
    }

    constructor(type, balance) {
        this.type = type
        this.balance = balance
    }

}

// ? Standard way
// const corysAcct = new Account("checking", 25000)

console.log(new Account("something", "something"))