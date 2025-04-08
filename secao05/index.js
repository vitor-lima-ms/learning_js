// Arrays são nada mais nada menos do que objetos no qual podemos adicionar múltiplos valores
    const myFriends = [
        'Xande',
        'Satan',
        'Seven',
    ]
    console.log(myFriends)

    // Adicionando valores
        let myNum = [
            7, 8, 9,
        ]
        console.log(myNum)

        myNum.push(10, 11, 12) // Adiciona no final do array
        console.log(myNum)

        myNum.unshift(1, 2, 3) // Adiciona no inicio
        console.log(myNum)

        myNum.splice(3, 0, 4, 5, 6) // Adicionar no índice 3. O 0 indica que não iremos deletar nenhuma número
        console.log(myNum)

    // Procurando itens em uma array primitiva
        console.log(myNum.indexOf(100)) // Retorna o índice do número se ele estiver no array. Retorna -1 se não estiver no array
        console.log(myNum.includes(100)) // Retorna false ou true
    
    // Procurando itens em uma array de referência
        const myMovies = [
            {'id': 1, movieName: 'Dejavu'},
            {'id': 2, movieName: 'Back to the Future'},
            {'id': 3, movieName: 'Interstellar'},
        ]
        console.log(myMovies.find( // Só funciona com uma função dentro dele
            function(movie) {
                return movie.movieName === 'Interstellar' 
            }
        ))
    
        // Arrow function (=>)
            console.log(myMovies.find(
                movie => movie.movieName === 'Interstellar' // => tem a função e o return implicitamente
            ))

    // Remover itens
        console.log(myNum)
        myNum.pop() // Remove o último elemento. Esse elemento pode ser atribuído à uma variável
        console.log(myNum)

        myNum.shift() // Remove o primeiro elemento. Esse elemento pode ser atribuído à uma variável
        console.log(myNum)
        
        myNum.splice(5, 1) // A partir do index 5, remove um item. Esse ou esses itens removidos podem ser atribuídos à uma variável
        console.log(myNum)
    
    // Esvaziando
        // myNum = [] // Primeira forma
        // myNum.length = 0 // Segunda forma
        myNum.splice(0, myNum.length) // Terceira forma
        console.log(myNum)
    
    // Concatenando e dividindo
        let myNum2 = [
            7, 8, 9, 4, 2, 1, 3,
        ]
        let all = myNum2.concat(myFriends)
        console.log(all)

        let half = all.slice(2, 4)
        console.log(half)
    
    // Join
        let myFriendsJoin = myFriends.join(', ') // Converte array em string com um separador especificado
        console.log(myFriendsJoin)
    
    // Ordenando um array
        console.log(myNum2.sort()) // Com strings, ordena em ordem alfabética
        console.log(myNum2.reverse()) // Invsersão
    
    // Verificando elementos
        let tempLondon = [
            18, -13, 8, 2, 7, -1,
        ]
        let tempNegative = tempLondon.every( // Checa se todos os valores de um array atendem à condição
            value => value < 0 // False
        )
        console.log(tempNegative)
        let tempPositive = tempLondon.every(
            value => value >= 0 // True
        )
        console.log(tempPositive)
    
    // Filtrando
    tempNegative = tempLondon.filter( // Retorna os valores de um array que atendem à condição
        value => value < 0 // False
    )
    console.log(tempNegative)
    tempPositive = tempLondon.filter(
        value => value >= 0 // False
    )
    console.log(tempPositive)