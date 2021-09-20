//проверка номера телефона с регулярными выражениями

function emailCheck(str) {
    const reg = new RegExp(/(^https?:\/\/)?[a-z0-9~_\-.]+\.[{ph, tml}]/i)
    return reg.test(str)
}

alert(emailCheck("http://site.com"))