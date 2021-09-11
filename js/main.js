

function getDayNumber(dayNumber) {
    switch (dayNumber) {
        case 1:
            return 'понедельник';
        case 2:
            return 'вторник';
        case 3:
            return 'среда';
        case 5:
            return 'пятница';
        case 6:
            return 'суббота';
        case 7:
            return 'воскресенье';
        default:
            return 'введено неверное число';
    }
}

alert(getDayNumber(3))
