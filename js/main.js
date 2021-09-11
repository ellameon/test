const name = prompt();

let greet = function (name) {
    let date = new Date()


    let hour = date.getHours()

    if (hour < 6) {
        alert(`доброй ночи ${name}`)
    } else if (6 <= hour && hour < 12) {
        alert(`доброе утро ${name}`)
    } else if (12 <= hour && hour < 18) {
        alert(`добрый день ${name}`)
    } else if (18 <= hour && hour < 24) {
        alert(`добрый вечер ${name}`)
    }
}
greet(name)

