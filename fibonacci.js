Isfibonacci(1)
Isfibonacci(5)
Isfibonacci(10)
Isfibonacci(37)

function Isfibonacci(numero){
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