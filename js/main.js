let numbers = [1, 2, 5, 12, 15, 21, 25, 30, 41]

let resultArray = numbers.filter(elem => elem.valueOf() % 5 === 0 )

console.log(resultArray)
