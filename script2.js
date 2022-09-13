function contar() {
    var ini = document.getElementById('inicio1')
    var fim = document.getElementById ('fim2')
    var pas = document.getElementById ('passo3')
    var res = document.getElementById ('res')
if (ini.value.length==0 || fim.value.length==0 || pas.value.length==0) {
    window.alert ('Preencha os dados e tente novamente!')
    res.innerHTML = 'Impossível Contar'
}
    else{
        res.innerHTML = 'Contando: </br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p<=0) { p=1}
        if (i<f) {
        for (var c = i ; c<= f; c+=p) {  // quando for criar condição considerar um efeito imaginário
            res.innerHTML += `${c} \u{1F449}` //ficou faltando essa observação no innerhtml '''+=''' e não precisava de parentese
        }} else {
            for (var c = i ; c>=f; c-=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML +=`\u{1F3C1}` //res.innerhtml é ===== depois as aspas
    }
   
}