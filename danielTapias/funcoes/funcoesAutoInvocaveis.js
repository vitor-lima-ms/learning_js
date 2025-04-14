// IIFE

(function(n1, n2, n3){
    console.log(n1 + n2 + n3)
})(1, 2, 3) // Geram um escopo isolado de cada arquivo, impedindo a sobreposição de funções com mesmo nome em arquivos diferentes

// Browsers mais modernos apresentam mecanismos de impedir a sobreposição, não sendo necessári o uso de IIFE