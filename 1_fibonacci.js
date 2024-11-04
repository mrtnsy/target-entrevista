//1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
//   (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele
//   calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

isfibonacci(1)
isfibonacci(5)
isfibonacci(10)
isfibonacci(37)

function isfibonacci(numero){
    let valor1 = 0
    let valor2 = 1
    let sequencia = valor1 + valor2

    while(sequencia < numero){
        valor1 = valor2
        valor2 = sequencia
        sequencia = valor1 + valor2
    }
    if(numero === sequencia || numero === 0){
        console.log(`O número ${numero} pertence a sequência de fibonacci!`)
    }
    else{
        console.log(`O número ${numero} não pertence a sequência de fibonacci!`)
    }
}