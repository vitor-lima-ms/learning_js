// Funções podem ser passadasr como parâmetro para outras funções (callback)
// Podem ser atribuídas em propriedades de objetos (métodos)
// Podem ser retornacas como resultado de outra função
// Podem ter suas própria propriedades

const callBackFunc = function callBack() {
    console.log('Callback')
}

function fN(cb) {
    const paramType = typeof cb
    
    if(paramType === 'function') {
        cb()
    }
    else {
        console.log('cb não é uma função')
    }    
}

const a = 0

fN(callBackFunc)