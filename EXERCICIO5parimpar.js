
// FUNÇÃO SIMPLES PARA VERIFICAR SE O NÚMERO É IMPAR OU PAR

function exibirTipo (limite){
    for (var i = 0 ; i<=limite ; i++) {
    if (i%2==0 || limite==0) {
        console.log (i,` - O número ${i} é PAR`)
    } else {console.log (i,` - O número ${i} É IMPAR`)}

}
}
exibirTipo (14);