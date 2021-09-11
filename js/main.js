

function getGenderString(genderCode) {
    switch (genderCode.toUpperCase()) {
        case 'M':
            return 'Ваш пол мужской';
        case 'F':
            return 'Ваш пол женский';
        default:
            return 'Ваш пол неопределен';
    }
}

alert(getGenderString('m'))