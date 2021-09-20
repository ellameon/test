//проверка номера телефона с регулярными выражениями

function telephoneCheck(str) {
    const reg = new RegExp(/^(\+*)(\d*)([(]\d{1,3}[)]*)*(\s?\d+|\+\d{2,3}\s\d+|\d+)[\s|-]?\d+([\s|-]?\d+){1,2}(\s)*$/gm)
    return reg.test(str)
}

alert(telephoneCheck("89211242120"))