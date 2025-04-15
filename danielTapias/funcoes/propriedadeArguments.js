const myFunc = function sum() {
    let varSum  = 0
    
    for (let i = 0; i < arguments.length; i++) {
        varSum += arguments[i]
    }

    return varSum
}

console.log(myFunc(1, 2))
console.log(myFunc(1, 2, 3))
console.log(myFunc(1, 2, 3, 4))

// Arguments não funciona em arrow functions