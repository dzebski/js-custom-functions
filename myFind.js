// 🙂 JavaScript by dzebovski@gmail.com, telegram: @dzebski

// --------------------------   //
// 👉 Custom FIND function       //
// --------------------------   //

function myFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true)
            return array[i]
    }
}

Array.prototype.myFindProto = function(callback) {
    for (let i = 0; i < this.length; i++ ) {
        if (callback(this[i]) === true) {
            return this[i]
        }
    }
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
let foundedNumbers = myFind(numbersArray, number => number >= 42)
foundedNumbers = numbersArray.myFindProto(number => number >= 42)

console.log('Founded Number 👉 ' + foundedNumbers)

// #2. Strings
let foundedString = myFind(stringsArray, el => el.includes('pine'))
foundedString = stringsArray.myFindProto(el => el.includes('pine'))

console.log('Founded String 👉 ' + foundedString)

// #3. Objects
let foundedUser = myFind(userArray, user => user.givenName.toLowerCase() === 'ben')
foundedUser = userArray.myFindProto(user => user.givenName.toLowerCase() === 'ben')

console.log('Founded User 👇 ')
console.table(foundedUser)