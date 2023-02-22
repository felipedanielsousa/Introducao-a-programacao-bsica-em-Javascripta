// console.log('Olá Javascript!')

var userName = 'Felipe Daniel'

document.getElementById('username').innerHTML = userName

//  var nome = 'Mestre Yoda'
//  var idade = 100
//  var jedi = true

// /console.log(nome)
//  console.log(idade)
//  console.log(jedi)

// Operadores matemáticos //

// var n1 = 7
// var n2 = 2.5

// console.log(typeof n1)
// console.log(typeof n2)

// var total = n1 / n2
// console.log(total)

// Operadores de comparacao //
// var v1 = 5
// var v2 = '5'

// // === comparar v1 com v2 == ignora a tipagem
// // !== diferente, leva em consiração a tipagem != ignora a tipagem
// var resultado = v1 != v2 
// console.log(resultado)

// Funções //

// function soma(n1, n2) {
//     console.log(n1 + n2)
// }

// soma(5, 5)

// function soma(n1, n2){
//     return n1 + n2
// }

// resultado = soma(5,5)
// console.log(resultado)
// function boasVindas(nome) {
//     alert(nome + ', seja bem vindo(a)!')
// }

// boasVindas('Felipe')

// Controle de fluxos //

// Sendo um cliente correntista do banco --Ator
// Posso sacar dinheiro em caixas eletrônicos --Funcionalidade a ser desenvolvida
// Para poder comprar em lugares que não aceitam o cartão de débito ou crédito --Valor agregado

// var saldo = 1000

// function saque(valor){
//     if(valor > saldo) {
//         console.log('O valor do saque é superior ao saldo.')
//     } else if(valor > 700){
//         console.log('O valor do saque é superior ao saque máximo permitido por operação')
//     } else {
//         saldo -= valor
//         return saldo
//     }
// }

// saque(701)
// console.log(saldo)

// Cenário 1: Saque com sucesso
// Dado que meu saldo é 1000
// Quando eu faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo


// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é 1000 reais
// Quando eu faço um saque de 1001 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

// Cenário 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700 reais
// Quando eu faço um saque de 701 reais
// Então o valor não deve deduzir do saldo 
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saque máximo permitido

// Arrays //

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

// personagens.push('C3pO')
// personagens.push('R2D2')

// // personagens.pop()

// personagens = personagens.filter(function(p) {
//     return p !== 'Darth Vader'
// })

// personagens = personagens.filter(function(p) {
//     return p === 'Mestre Yoda'
// })

// console.log(personagens)

// Controle de repetição //

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'R2D2']

// personagens.forEach(function(p) {
//     console.log(p)
// })

// for (var i in personagens) {
//     console.log(personagens[i])
// }

// for (var i = 0; i <= 10; i++) {
//     console.log(i)
// }

// Objetos //

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function() {
//         console.log(`A idade do ${this.nome} é ${this.idade} anos.` ) //Apostrofos `` permitem usar variáveis dentro da string
//     }
// }

// console.log(yoda)
// yoda.mostraIdade()

// Constantes // 
// const nome = 'Darth Vader'
// console.log(nome)

// nome  = 'Mestre Yoda'
// console.log(nome)