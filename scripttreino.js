var tab = document.getElementById ('seltab')
var num = document.getElementById ('txtnum')
var valores = []
var res = document.getElementById ('res')

function isNumero (n) {
    if (Number(n)>=1 && Number(n) <=100)   {
        return true}
        else { return false}
    }


function inLista (n,l) {
    if (l.indexOf (Number(n)) !=-1)
    {
        return true
    }   else {return false}
}

function adicionar () {
    if (isNumero(num.value) && !inLista(num.value,valores)) { //essa parte é difícil de entender, mas entendível
        valores.push (Number(num.value))
        var item =document.createElement ('option')
        item.text=`Valor ${num.value} adicionado!`
        tab.appendChild (item)
        res.innerHTML= ''
    } else {
        window.alert ('Número inválido')
    }
    num.value =''
    num.focus ()
    }

function finalizar() {
    if(valores==0){
        window.alert ('Por favor, adicionar números')
    }
    else{
        var total = valores.length
    var maior = valores [0]
    var menor = valores [0]
    var soma = 0
    var media = 0
    
    for (var pos in valores){ //essa parte não entendi
        soma += valores[pos] //não entendi
        media = soma / total
        if(valores [pos]> maior){ //não entendi
            maior = valores[pos] 
        }
        if (valores [pos]<menor){ //não entendi
            menor = valores[pos]
        }
    }
    res.innerHTML = ''
    res.innerHTML += `<p>O total de número adicionar é ${total}.</p>`
    res.innerHTML += `<p>O maior número é ${maior}.</p>`
    res.innerHTML += `<p>O menor número é ${menor}.</p>`
    res.innerHTML += `<p>A soma de todos os números é ${soma}. </p>`
    res.innerHTML += `<p>A media dos valores informados é ${media}.</p>`
}
}