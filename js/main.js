//Выводим кнопку с текстом "Заполнить" и незаполненный инпут, при клике на кнопку, заполняем инпут текстом "test@email.ru"

function buttonClick () {
    let input = document.getElementById('fill');
    input.value = 'test@email.ru'
}
