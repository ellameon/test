//Выводим кнопку и инпут, в инпуте можно ввести любой и текст и при нажатии на кнопку,
// выводится алерт с текстом "Вы ввели 'текст инпута'" или "Вы ничего не ввели в поле".

function alertAfterClick() {
    let input = document.getElementById('test')
    if (input.value !== '') {
        alert(`Вы ввели ${input.value}`)
    } else {
        alert(`Вы ничего не ввели в поле`)
    }





}