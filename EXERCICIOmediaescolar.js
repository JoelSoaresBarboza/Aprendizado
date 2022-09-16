  /*  for (var nota of notas){
        soma += nota;
    }
    var media = soma/(notas.length);*/ // OUTRA FORMA DE SOMAR NUMEROS DE UM ARRAY

const array = [100,50]

console.log (mediaDoAluno (array));

function mediaDoAluno (notas) {
    var soma = 0
    var soma = notas.reduce (function media (soma,i){
        return soma + i
    })
    var media = soma/(notas.length)

    if (media >= 0  && media<=59){
        return 'F'
    }
    else if (media >=60 && media <=69) { 
        return 'D'}
    else if (media>=70 && media <=79) {
        return 'C'
 }  else if (media>=80 && media <=89) {
    return 'B'
 } else { return 'A'}
    
}



// SÓ REPRISANDO 

const notaAluno = [5,6,1]
console.log (calculo (notaAluno))

function calculo (boletim){
    var soma = 0
    soma = boletim.reduce (function calculeira (soma, i){
        return soma+i
    })
    var media = soma/ (boletim.length)
    if (media>= 0 && media <7) {
        return 'reprovado'
    } else {return 'Aprovado'}
}

