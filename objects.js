/* 
    ? Objects
    * container for values in JavaScript Object Notation Format (JSON)
    * exists as a string
    * denoted by { }
    * not indexable
    * has properties & methods
        * .property (ex: .length)
        * .method() (ex: .split())
    * has .this keyword which deals with scope
*/

// ? Object Creation (Literal)

let bentley = {
    // property: value,
    // key: value pairs
    name: "bentley",
    species: "dog",
    color: "cow",
    spayedNeutered: true,
    breed: "olde english bulldogee",
    weight: 72,
    favoriteActivities: ["farting", "fetching", "sleeping"]
}

console.log(typeof bentley, bentley)

// ? access using dot notation (.) properties
console.log(bentley.name)
console.log(bentley.favoriteActivities)
bentley.favoriteActivities.forEach(i => console.log(i))

console.log(bentley["spayedNeutered"])

// ? Viewing object keys and value
console.log(Object.keys(bentley))
console.log(Object.values(bentley))

// ? Adding properties and values

const porsche = {
    make: "Porsche",
    model: "911",
    mileage: 28000
}

console.log("Original Porsche Object", porsche)

porsche.hasSportExhaust = true
porsche["transmission"] = "PDK"
console.log(porsche)

porsche.mileage = 27000
console.log(porsche.mileage)

porsche.mileage -= 10000
console.log(porsche.mileage)

/* 
    ? Create an object called request
    * it will have properties of username and password, fabricate the values

    ? Create an object called db
    * make it be an array
    * within the array, create 4 different objects with username and pwd properties
    * fabricate the values
*/

const request = {
    username: "fcordova",
    password: "iLoveTuhtles"
}

const db = [
    { username: "laura", password: "password123", },
    { username: "paul", password: "imsickplskillme", },
    { username: "nickcapel", password: "grademachin3", },
    { username: "johnm", password: "6mtforev3r!", },
    { username: "fcordova", password: "iLoveTuhtles" }
]

console.log(db[3].password)


/* 
    ? Challenge
    * Create a login function
    * the function will take the request and check it against the db
    * if a user is found, check the password
    * if the password is correct, console.log("user logged in")
    * if not, "invalid password"
    * if a user is not found, say "user not found"
    
    * create a function
    * check if user exists in the database
    * loop over the database to find a match
    * if they exist
    * check password
    * if password correct
    * if password incorrect
    * if they don't exist
*/

function login() {
    console.log("request", request.username)
    
    // try {
    //     const foundUser = db.filter((usr) => usr.username === request.username)
        
    //     if (foundUser.length === 0) throw new Error("User not found")
    
    //     if (foundUser[0].password !== request.password) throw new Error("Incorrect password")

    //     return "User logged in"
        
    // } catch (err) {
    //     console.log(err)
    // }
    
    const foundUser = db.filter((usr) => usr.username === request.username)
    
    if (foundUser.length === 0) console.log("User not found")

    if (foundUser[0].password !== request.password) {
        console.log("Incorrect password")
    } else {
        console.log("User logged in")
    }

}

console.log(login())

/* 
    ? Challenge Easy
    * retrieve "Pilot" from this object
    * retrieve "1" of episdoe value from season2

    ! Challenge
    * add season3
    * it will hold properties of numberOfEpisodes and episodeInfo
    * episodeInfo will be an array of 2 objects
    * the two objects will have properties of episode & episodeName
    * fabricate their values
    ! Spicey Mode
    * numberOfEpisodes should auto-calculate how many there are instead of hardcoding the value
*/

let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place",
    seasonInfo: {
        season1: {
            numberOfEpisodes: 5,
            episodeInfo: [
                { episode: 1, episodeName: "Pilot"},
                { episode: 2, episodeName: "Flying"},
                { episode: 3, episodeName: "Tahani Al-Jamil"},
                { episode: 4, episodeName: "Jason Mendoza"},
                { episode: 5, episodeName: "Category 55 Emergency"},
            ]
        },
        season2: {
            numberOfEpisodes: 6,
            episodeInfo: [
                { episode: 1, episodeName: "Everything is Great"},
                { episode: 2, episodeName: "Dance Dance Resolution"},
                { episode: 3, episodeName: "Team Cockroach"},
                { episode: 4, episodeName: "Existential Crisis"},
                { episode: 5, episodeName: "The Trolley Problem"},
            ]
        }
    },
    isAvailable: true
}

console.log(netflix.seasonInfo.season1.episodeInfo[0].episodeName)
console.log(netflix.seasonInfo.season2.episodeInfo[0].episode)

netflix.seasonInfo.season3 = {
    numberOfEpisodes: 2,
    episodeInfo: [
        { episode: 1, episodeName: "Potato" },
        { episode: 2, episodeName: "Spaghetti" },
        { episode: 2, episodeName: "Spaghetti" }
    ]
}

netflix.seasonInfo.season3.numberOfEpisodes = netflix.seasonInfo.season3.episodeInfo.length

console.log(netflix.seasonInfo.season3)

const presidents = [
    { first: 'George', last: 'Washington', year: 1732, passed: 1799 },
    { first: 'John', last: 'Adams', year: 1735, passed: 1826 },
    { first: 'Thomas', last: 'Jefferson', year: 1743, passed: 1826 },
    { first: 'James', last: 'Madison', year: 1751, passed: 1836 },
    { first: 'James', last: 'Monroe', year: 1758, passed: 1831 },
    { first: 'John', last: 'Adams', year: 1767, passed: 1848 },
    { first: 'Andrew', last: 'Jackson', year: 1767, passed: 1845 },
    { first: 'Martin', last: 'Van Buren', year: 1782, passed: 1862 },
    { first: 'William', last: 'Harrison', year: 1773, passed: 1841 },
    { first: 'John', last: 'Tyler', year: 1790, passed: 1862 },
    { first: 'James', last: 'Polk', year: 1795, passed: 1849 },
    { first: 'Zachary', last: 'Taylor', year: 1784, passed: 1850 },
    { first: 'Millard', last: 'Fillmore', year: 1800, passed: 1874 },
    { first: 'Franklin', last: 'Pierce', year: 1804, passed: 1869 },
    { first: 'James', last: 'Buchanan', year: 1791, passed: 1868 },
    { first: 'Abraham', last: 'Lincoln', year: 1809, passed: 1865 },
    { first: 'Andrew', last: 'Johnson', year: 1808, passed: 1875 },
    { first: 'Ulysses', last: 'Grant', year: 1822, passed: 1885 },
    { first: 'Rutherford', last: 'Hayes', year: 1822, passed: 1893 },
    { first: 'James', last: 'Garfield', year: 1831, passed: 1881 },
    { first: 'Chester', last: 'Arthur', year: 1829, passed: 1886 },
    { first: 'Grover', last: 'Cleveland', year: 1837, passed: 1908 },
    { first: 'Benjamin', last: 'Harrison', year: 1833, passed: 1901 },
    { first: 'William', last: 'McKinley', year: 1843, passed: 1901 },
    { first: 'Theodore', last: 'Roosevelt', year: 1858, passed: 1919 },
    { first: 'William', last: 'Taft', year: 1857, passed: 1930 },
    { first: 'Woodrow', last: 'Wilson', year: 1856, passed: 1924 },
    { first: 'Warren', last: 'Harding', year: 1865, passed: 1923 },
    { first: 'Calvin', last: 'Coolidge', year: 1872, passed: 1933 },
    { first: 'Herbert', last: 'Hoover', year: 1874, passed: 1964 },
    { first: 'Franklin', last: 'Roosevelt', year: 1882, passed: 1945 },
    { first: 'Harry', last: 'Truman', year: 1884, passed: 1972 },
    { first: 'Dwight', last: 'Eisenhower', year: 1890, passed: 1969 },
    { first: 'John', last: 'Kennedy', year: 1917, passed: 1963 },
    { first: 'Lyndon', last: 'Johnson', year: 1908, passed: 1973 },
    { first: 'Richard', last: 'Nixon', year: 1913, passed: 1994 },
    { first: 'Gerald', last: 'Ford', year: 1913, passed: 2006 },
    { first: 'Jimmy', last: 'Carter', year: 1924, passed: undefined },
    { first: 'Ronald', last: 'Reagan', year: 1911, passed: 2004 },
    { first: 'George', last: 'Bush', year: 1924, passed: 2018 },
    { first: 'Bill', last: 'Clinton', year: 1946, passed: undefined },
    { first: 'George', last: 'Bush', year: 1946, passed: undefined },
    { first: 'Barack', last: 'Obama', year: 1961, passed: undefined },
    { first: 'Donald', last: 'Trump', year: 1946, passed: undefined },
    { first: 'Joseph', last: 'Biden', year: 1942, passed: undefined },
];

// ? Create a new array that only shows presidents born after 1900's
// const after1900 = presidents.filter(pres => pres.year > 1900)
// console.log(after1900)
// ? In a new loop or array method, give me string interpolated names of the presidents
// after1900.forEach(pres => console.log(`${pres.first} ${pres.last}`))

const after1900 = []

for (pres of presidents) {
    if (pres.year > 1900) {
        after1900.push(pres)
        console.log(`${pres.first} ${pres.last}`)
    }
}


// for (pres of after1900) {
//     console.log(`${pres.first} ${pres.last}`)
// }

/* 
    ? Inventory Management System
    write functions to:
    * add new item
        ! SPICEY MODE
        * account for if someone tries to enter a string or an array or anything NaN
    * remove an item
    * update the quanitty of an existing item
*/

const invetory = {
    apple: { price: 1, quantity: 10 },
    banana: { price: 2, quantity: 5 }
}