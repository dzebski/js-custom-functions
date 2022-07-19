// 🙂 JavaScript by dzebovski@gmail.com, telegram: @dzebski

// --------------------------   //
// 👉 Custom FILTER function       //
// --------------------------   //

function myFilter(array, callback) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            result.push(array[i])
        }
    }
    return result
}

Array.prototype.myFilterProto = function(callback) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            result.push(this[i])
        }
    }
    return result
}

// --------------------------   //
// 👉 Sample Data               //
// --------------------------   //

const userArray = [
    {id: 1, age: 22, givenName: 'Mike', secondName: 'Robinson', email: 'mike@gmail.com'},
    {id: 2, age: 23, givenName: 'Bob', secondName: 'Medison', email: 'bobby@yahoo.com'},
    {id: 3, age: 18, givenName: 'Ben', secondName: 'Getison', email: 'benisben@ben.com'},
    {id: 4, age: 16, givenName: 'Natasha', secondName: 'Jebrish', email: 'nata@gmail.com'},
    {id: 5, age: 42, givenName: 'Rein', secondName: 'Moppa', email: 'reisen@aol.com'},
    {id: 6, age: null, givenName: null, secondName: null, email: null},
    {id: null, age: null, givenName: null, secondName: null, email: null},
    {id: '', age: '', givenName: '', secondName: '', email: ''},
]
const numbersArray = [10, 20, 30, 40, 51, 62, 75]
const stringsArray = ['apple', 'banana', 'raspberry', 'pineapple', 'pen']

// --------------------------   //
// 👉 Execution                 //
// --------------------------   //

// #1. Numbers
let filteredNumbers = myFilter(numbersArray, number => number % 3 === 0)
filteredNumbers = numbersArray.myFilterProto(number => number % 3 === 0)

console.log('Founded Numbers 👉 ' + filteredNumbers)

// #2. Strings
let filteredStrings = myFilter(stringsArray, el => el.includes('apple'))
filteredStrings = stringsArray.myFilterProto(el => el.includes('apple'))

console.log('Founded Strings 👉 ' + filteredStrings)

// #3. Objects
let usersWithEmail = myFilter(userArray, user => user.email)
usersWithEmail = userArray.filter(user => user.email)

console.log('Founded Users with Email 👇 ')
console.table(usersWithEmail)