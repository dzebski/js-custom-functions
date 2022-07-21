// Є масив обєктів age і name, треба шоб на виході був масив стрінгів імен в аперкейсі 
// з обєктів де age більше 15.
// [{ age: 10, name: 'Test' }, { age: 20, name: 'Test' }].transformUpper()

const sampleData = [
    {
        age: 10,
        name: 'Test1'
    },
    {
        age: 20,
        name: 'Test2'
    },
    {
        age: 21,
        name: 'Test3'
    },
    {
        age: 15,
        name: 'Test4'
    }
]

const transformUpper = (data) => {
    let result = []
    for (const user of data)
        if (user.age > 15)
            result.push(user.name.toUpperCase())
    return result
}

Array.prototype.transformUpperProto = function() {
    let result = []
    for (const user of this)
        if (user.age > 15)
            result.push(user.name.toUpperCase())
    return result
}

// Anon function
const resultArray = transformUpper(sampleData)
console.log(resultArray)

// Prototype function
console.log(sampleData.transformUpperProto())


// function findUsers() {
//     let result = []
//     for (const user of sampleData)
//         if (user.age > 15)
//             result.push(user.name.toUpperCase())
//     return result
// }
// const usersWithAge = findUsers()
// console.table(usersWithAge)
