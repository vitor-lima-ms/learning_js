function sum() {
    let varSum  = 0
    
    for (let i = 0; i < arguments.length; i++) {
        varSum += arguments[i]
    }

    return varSum
}

console.log(sum(1, 2))
console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4))