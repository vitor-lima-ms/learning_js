// Operadores aritméticos
    let num1 = 1;
    let num2 = 2;
    console.log(num1 + num2); // Soma
    console.log(num1 - num2); // Subtração
    console.log(num1 * num2); // Multiplicação
    console.log(num1 / num2); // Divisão
    console.log(num1 % num2); // Resto da divisão
    console.log(num1 ** num2); // Potenciação

    let total = num1 + num2;
    console.log(++total); // Incremento (++) - Antes da execução. Altera o valor da variável total a partir daqui
    console.log(--total); // Redução (--) - Antes da execução

    console.log(total++); // Incremento (++) - Depois da execução. Não mostra no console, mas o valor da vairável total agora é o valor da soma + 1
    console.log(total);
    console.log(total--); // Redução (--) - Depois da execução
    console.log(total);

// Operadores de atribuição
    // Utilizar = para atribuir um valor a uma determinada variável
    // Ele pode vir junto com um operador aritmético
    console.log(num1+=1);
    console.log(num1-=1);
    console.log(num1*=1);
    console.log(num1/=1);

// Operadores de comparação
    console.log(num1 > num2); // Maior que
    console.log(num1 < num2); // Menor que
    console.log(num1 >= num2); // Maior ou igual a
    console.log(num1 <= num2); // Menor ou igual a
    // Operadores de igualdade
        console.log(num1 === num2); // Igual. Verifica se dois valores são iguais, inclusive o tipo (strict equality)
        console.log(num1 == num2); // Igual. Verifica se dois valores são iguais, mas não verifica o tipo (loose equality)
        console.log(num1 !== num2); // Diferente
    
// Operadores ternários
    let driverSpeed = 90;
    let speedLimit = driverSpeed > 110 ? 'Above' : 'Below'; // Se o motorista estiver acima, retorna o valor após a ?. Se não, retorna o valor após os dois pontos
    console.log(speedLimit);

// Operadores lógicos
    // and (&&), or (||) e not (!)
    let hasMinimumAge = true;
    let hasDoc = false;
    let canVote = hasMinimumAge && hasDoc;
    console.log(canVote);

    hasMinimumAge = true;
    hasDoc = true;
    canVote = hasMinimumAge || hasDoc;
    console.log(canVote);

    let canTravel = !canVote;
    console.log(canTravel);

    // strings
    let clientColor = 'White';
    let stockColor = 'Black';
    let soldColor = clientColor || stockColor; // Se o clientColor tiver sido definido, soldColor = clientColor (verifica da esquerda para direita)
    console.log(soldColor);

    clientColor = undefined;
    stockColor = 'Black';
    soldColor = clientColor || stockColor; // Como o client color não está definido, soldColor = stockColor
    console.log(soldColor);

// if e else
    driverSpeed = 110;
    if (driverSpeed > 110) {
        console.log('Fast')
    }
    else if (driverSpeed > 40 && driverSpeed <= 110) {
        console.log('Ok')
    }
    else
        console.log('Slow');

// switch e case
    let airportAbb = 'ABC'
    switch (airportAbb) {
        case 'MCO':
            console.log('Orlando')
            break
        case 'JFK':
            console.log('John F. Kennedy')
            break
        case 'SEA':
            console.log('Seattle')
            break
        default:
            console.log('Unknow')
    };

// for loop
    // for (delcarar a variavel; condição; incremento)
        for (let numFor = 1; numFor < 11; numFor++) {
            console.log('Número: ' + numFor)
        };
    
    // for in
        const myCar = {
            model: 'BMW',
            year: 2025,
            km: 68000,
        };
        for (let iForIn in myCar)
            console.log(iForIn, myCar[iForIn]);
    
    // for of
        // Utilizado principalmente em arrays
        const myFriends = [
            'Xande',
            'Pedrex',
            'Satan',
            'Seven',
        ];
        for (let iForOf of myFriends)
            console.log(iForOf);

// while loop
    let numWhile = 1
    while (numWhile < 11) { // Verifica para depois executar
        console.log('Número: ' + numWhile)
        numWhile++
    };

    // do while
        let numDoWhile = 1
        do { // Executa para depois verificar
            console.log('Número: ' + numDoWhile)
            numDoWhile++
        }
        while (numDoWhile < 11)

// break
    numWhile = 1
    while (numWhile < 11) { // Verifica para depois executar
        if (numWhile === 5) break

        console.log('Número: ' + numWhile)
        numWhile++
    };