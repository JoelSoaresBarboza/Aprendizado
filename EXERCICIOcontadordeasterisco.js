exibirAsteriscos(5);

function exibirAsteriscos(linhas) {
    var padrao = ''
    for (var linha = 1;linha<=linhas;linha++){ //1 FORMA DE SE RESOLVER (SEM LOOP DENTRO DE UM LOOPING)
      
        padrao += '*'
        console.log (padrao)
    } 
}


exibirCifrao(5);
function exibirCifrao (quantidade) {
    for (var i=0;i<quantidade;i++){
        var roleta = ''
        for (var t = 0 ; t <=i ; t++){ // 2 FORMA DE SE RESOLVER (COM LOOPING INTERNO --- REPARAR NA VAR ROLETA QUE FICOU DENTRO DO FOR, DIFERENTE DA PRIMEIRA)
            roleta +='$'
        }console.log (roleta)
    } 
}
