/*var num = [5,8,9,3]
num.sort()
console.log (`Nosso vetor é o ${num}`)

/*num [4] = 6
console.log (`${num}`)
num.push (4)

console.log (`o Vetor tem ${num.length} posições`)
/*console.log (`organizando em ordem crescente: ${num.sort()}`)
console.log (`O primeiro valor é ${num[0]}`)*/


let valores = [1,4,5,9,2]
valores.sort()
/*console.log (valores [0])

for(var pos = 0 ; pos<valores.length ; pos++) {
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(var pos in valores){
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
} // o código simplicado

var qua = valores.indexOf (5)

console.log (`O valor 3 está na posição ${qua} `)