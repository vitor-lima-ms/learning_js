function getValues() {
    const number01 = document.getElementById('number01').value;
    const number02 = document.getElementById('number02').value;
    const operation = document.getElementById('operations').value;

    if (operation === 'Soma') {
        let soma = Number(number01) + Number(number02)
        document.getElementById('result').innerText = soma
    }
    else if (operation === 'Subtração') {
        let sub = Number(number01) - Number(number02)
        document.getElementById('result').innerText = sub
    }
    else if (operation === 'Multiplicação') {
        let mult = Number(number01) * Number(number02)
        document.getElementById('result').innerText = mult
    }
    else {
        let division = Number(number01) / Number(number02)
        document.getElementById('result').innerText = division
    }
};