//3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça 
//   { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA); Ao final do processamento, qual será o valor da variável SOMA?

//Resposta: Ao final do processamento o valor da variável soma será: 77

let indice = 12
let soma = 0
k = 1

while(k < indice){
    k++
    soma += k
}

console.log(`Ao final do processamento o valor da variável soma será: ${soma}`)
