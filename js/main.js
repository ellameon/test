const personArray = [{name: 'иван', age: 25}, {name: 'олег', age: 30}, {name: 'андрей', age: 35}]

const stringArray = firstArray.map((person) => `Имя: ${person.name}, возраст: ${person.age}`)

console.log(stringArray)

