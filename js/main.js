//Выводим кнопку с текстом "Поменять" и два инпута,
// при клике на кнопку инпуты меняются своим введеным текстом

function changeInputs() {
    let input1 = document.getElementById('input1')
    let input2 = document.getElementById('input2')

    const input1Value = input1.value
    input1.value = input2.value
    input2.value = input1Value
    }





