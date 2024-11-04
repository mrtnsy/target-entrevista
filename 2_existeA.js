//2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

existeLetraA("papAgaio")
existeLetraA("arArA")
existeLetraA("peixe")
existeLetraA("bom dia, tudo bem?")

function existeLetraA(texto){
    txtMaisculas = texto.toUpperCase()
    let contador = 0

    for(let i = 0; i < txtMaisculas.length; i++){
        if(txtMaisculas[i] === 'A')
            contador++
    }
    if(contador > 0){
        console.log(`Número de vezes que 'a' aparece no texto: ${contador}`)
    }
    else{
        console.log("A letra 'a' não aparece nenhuma vez no texto.")
    }
}