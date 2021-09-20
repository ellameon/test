//Выводим две кнопки "заблокировать" и "разблокировать" и инпут.
//Одна из них блокирует инпут с помощью атрибута disabled, а другая разблокирует

function block() {
    let input = document.getElementById('input')
    input.disabled = true
    }

function unblock() {
    let input = document.getElementById('input')
    input.disabled = false
}



