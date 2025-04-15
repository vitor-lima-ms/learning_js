const myFunc1 = function sum() {
    let varSum  = 0
    
    for (let i = 0; i < arguments.length; i++) {
        varSum += arguments[i]
    }

    return varSum
}

console.log(myFunc1.name) // Serve para acessar o nome da função

const myFunc2 = function () {
    let varSum  = 0
    
    for (let i = 0; i < arguments.length; i++) {
        varSum += arguments[i]
    }

    return varSum
}

console.log(myFunc2.name)