const name = prompt('введите имя')
const age = prompt('возраст')

let personDesc = function (name, age) {
    if (1 <= age && age <= 17) {
        console.log(`${name} имеет возраст ${age} и он ребенок`)
    }
    else if (18 <= age && age <= 30)
        console.log(`${name} имеет возраст ${age} и он молодой`)
    else if (31 <= age && age <= 55)
        console.log(`${name} имеет возраст ${age} и он взрослый`)
    else if (56 <= age && age <= 100)
        console.log(`${name} имеет возраст ${age} и он старый`)
}

personDesc(name, age)