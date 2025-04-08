
// Primeiro código
    console.log('Hello World externo!');

// Boas práticas na declaração de variáveis
    let firstName = 'Vitor'; // Utilizar camelCasel
    console.log(firstName);
    let lastName = 'Silva';
    console.log(lastName);

// Declaração de variáveis
    let price = 30;
    price = 20;
    console.log(price);
    const priceConst = 30;
    // priceConst = 20; // Não podemos alterar o valor de uma variável que foi decladara como constante
        console.log(priceConst);

// Tipos primitivos
    // string, number, boolean, undefined e null
        let itemName = 'Pen;' // string
        let itemPrice = 3; // number
        let itemAvailable = true; // boolean
        let itemColor; // undefined. Variável sem valor atribuído
        let itemCharge = undefined; // undefined. Variável com undefined como valor atribuído
        itemName = null; // null. Usado para remover o que está armazenado em uma variável
// JS é uma linguagem dinâmica
    // No momento da declaração da variável, não precisamos definir o tipo da variável. A própria linguagem tem a capacidade de entender qual o tipo a partir do que foi atribuído
    console.log(typeof itemPrice);
    itemPrice = '3';
    console.log(typeof itemPrice);

// Tipos dinâmicos
    // objects, arrays, functions
        // objects
            itemColor = 'Red';
            itemName = 'Pen';
            let pen = {
                itemName, // Isso é uma property do objeto
                itemPrice,
                itemAvailable,
                itemColor,
            };
            console.log(pen)
            // Alterando propertys
                pen.itemColor = 'Blue';
                console.log(pen); 
            // Visualizando apenas uma property
                console.log(pen.itemName);
        // arrays
            let friends = [ // Os itens não precisam ser do mesmo tipo
                'Xirxu', // Index = 0
                'Xande', // Index = 1
                'Seven', // Index = 2
                'Satan', // Index = 3
            ];
            console.log(friends);
            console.log(friends[2]); // Acessando elementos pelo índice
            friends[2] = 'Gue'; // Substituindo valores
            console.log(friends);
        // functions
            // Funções com tarefas
                function saleStatus(status, total) {
                    console.log('Transaction ' + status + '. ' + 'Total amount: ' + total + ' USD.')
                };
                saleStatus('approved', 30);
            // Funções com cáculos
                function percentage10(price) {
                    let priceWithDiscount = price * 0.90
                    return priceWithDiscount
                }
                console.log(percentage10(20))