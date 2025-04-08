// O que é um objeto?
    // Objeto é um conceito bem abstrato, mas podemos citar como exemplo várias coisas do nosso dia a dia que são consideradas como objetos
        // Todo objeto possui propriedades. Por exemplo, um livro apresenta título, autor, páginas, preço etc.
        // Além disso, todo objeto possui métodos. Podemos entender os métodos como coisas que podemos fazer com os objetos. Um livro por exemplo pode ser lido, vendido, comprado etc.
        // Criando um objeto (livro)
            let book = {
                'title': 'Atomic Habits',
                'author': 'James Clear',
                'pages': 306,
                'chapters': {
                    'chap1': 'Fundamentals',
                    'chap2': '1st law'
                }

            }
            console.log(book)

        // Funções dentro de um objeto
            book = {
                'title': 'Atomic Habits',
                'author': 'James Clear',
                'pages': 306,
                'chapters': {
                    'chap1': 'Fundamentals',
                    'chap2': '1st law'
                },
                'printBook': function() {
                    console.log('Printing...')
                }
            }
            book.printBook()

// O que é um factory?
    // Para objetos muito relacionáveis, podemos criar uma factory, que agrupa/cria esses objetos parecidos
    // Criando uma factory
        function bookFactory(
            title,
            author,
            pages,
        ) {
           const book = {
                'title': title,
                'author': author,
                'pages': pages,
                'printBook': function() {
                    console.log('Printing...')
                }
            }
            return book
        }

        const book1 = bookFactory(
            'The Witcher - Tempo de Tempestade',
            'Andrzej S.',
            500,
        )

    // Adicionando propriedades
        book1.selling = true
        console.log(book1)

// O que é constructor?
    // É um outro método para construir objetos. Eles são um pouco mais simples que as factories, mas o resultado é o 
    // Ele não precisa do return para retornar um objeto criado
    // Criando um constructor
        function BookConstructor( // Para constructors, utilizamos a Pascal Case
            title,
            author,
            pages,
        ) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.printBook = function() {
                console.log('Printing...')
            };
        }
        const book2 = new BookConstructor(
            'The Witcher - A Senhora do Lago',
            'Andrzej S.',
            600,
        )
        console.log(book2)
        
// Garbage collector
    // Feature do Java Script onde não precisamos configurar a reserva de memória para armazenar uma variável. Além disso, ele faz o dumping (tirar a reservar para liberar memória) 
    
// Objetos built-in (objetos já construídos)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
    
    // string
        // Utilizado para representação e manipulação de caracters
            let message = 'Hey! My name is Vitor.'
            console.log(message.startsWith('Hey')) // É case sensitive
            console.log(message.length)
            console.log(message.includes('Vitor'))
            console.log(message.endsWith('Vitor.'))

// Template literals
    // Utilizado para mostrar mensagens na tela, escrever emails que se baseiam em uma mensagem que está no nosso código etc.
    const email1 = 'Hi Joe!\nThe meeting is confirmed.\nVitor.'
    const email2 = `Hi Joe!
    The meeting is confirmed.
    Vitor.`
    let firstName = 'Vitor'
    const email3 = `Hi Joe!
    The meeting is confirmed.
    ${firstName}`
    console.log(email2)