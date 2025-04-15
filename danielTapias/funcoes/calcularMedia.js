function meanCalc() {
    if (arguments.length === 0) {
        return 0
    }
    
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            return TypeError('Algum dos parâmetros não é numérico!')
        }

        sum += arguments[i]
    }

    mean = sum / arguments.length

    return mean

}

console.log(meanCalc())
console.log(meanCalc(2, 6))
console.log(meanCalc(2, 6, 1, 1, 2, 6))
console.log(meanCalc('2', 6))