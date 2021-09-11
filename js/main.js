const n = Number(prompt())

const string = '*'.repeat(n)

console.log(string)

for (let i = 0; i < n - 2; i++) {
    console.log('*' + ' '.repeat(n-2) + '*')
}

console.log(string)

