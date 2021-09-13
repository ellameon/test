let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Mary: 200
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key]
    if (salaries[key] === 0) {
        sum = 0
}

}
console.log(sum)


