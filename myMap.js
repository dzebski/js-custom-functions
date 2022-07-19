// 🙂 JavaScript by dzebovski@gmail.com, telegram: @dzebski

// --------------------------   //
// 👉 Custom MAP function       //
// --------------------------   //

function myMap(array, callback) {
    let mappedArray = []
    for (let i = 0; i < array.length; i++) {
        mappedArray.push(callback(array[i]))
    }
    return mappedArray
}

Array.prototype.myMapProto = function(callback) {
    let mappedArray = []
    for (let i = 0; i < this.length; i++) {
        mappedArray.push(callback(this[i]))
    }
    return mappedArray
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
let mappedNumbers = myMap(numbersArray, number => number / 10)
mappedNumbers= numbersArray.myMapProto(number => number / 20)

console.log('Mapped Numbers 👇')
console.table(mappedNumbers)

// #2. Strings
let mappedStrings = myMap(stringsArray, el => el + ' 🤡')
mappedStrings = stringsArray.myMapProto(el => el + ' 🍌')

console.log('Mapped Strings 👇')
console.table(mappedStrings)

// #3. Objects
let mappedUsers = myMap(userArray,user => [user.givenName, user.secondName].join(' '))
mappedUsers = userArray.myMapProto(user => [user.givenName, user.secondName].join(' '))
console.log('Mapped Users: Name + Second Name 👇')
console.table(mappedUsers)