const name = 'Иван';
const surname = 'Петров';
const age = 17;

alert(createGreetString(name, surname, age));

function createGreetString (name, surname, age) {
    return `привет ${name} ${surname} с возрастом ${age} лет `;
}


