const arr = [6, 2, 4, 12, 8, 20, 26, 30, 40, 80];

function moveElement(arr,from,to) {
    arr.splice(to,0,arr.splice(from,1)[0])
    return arr
}


console.log(moveElement(arr,0,arr.length));




