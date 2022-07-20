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
    }
]

function findUsers() {
    let result = []
    for (const user of sampleData)
        if (user.age > 15)
            result.push(user.name.toUpperCase())
    return result
}

const usersWithAge = findUsers()

console.table(usersWithAge)
