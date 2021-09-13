


function averageSum (arr) {
 let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

console.log(averageSum([6, 2, 4, 12, 8, 20, 26, 30, 40, 80]))