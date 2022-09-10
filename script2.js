function verificar() {
var data = new Date ()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById ('res')

if(fano.value.length == 0 || fano.value > ano){
    window.alert ('[ERRO] Verifique os dados e tente novamente!')
}

else{
var fsex = document.getElementsByName ('radsex')
var idade = ano - Number(fano.value)
var genero = ''
var img = document.createElement('img')
img.setAttribute('id','foto')
if (fsex[0].checked) {
    genero = 'Homem'
    if (idade>=0 && idade<=2){
        img.setAttribute = ('src','foto-bebem.png')
    } else if (idade<12){
        img.setAttribute = ('src','foto-menino.png')
    }
    else if (idade<22){
        img.setAttribute = ('src','foto-adolescentem.png')
    }
    else if (idade<60){
        img.setAttribute = ('src','foto-homem.png')
    }
    else {img.setAttribute = ('src','foto-idoso.png')}
   

} else {
    genero = 'Mulher'
    if (idade>=0 && idade<=2){
        img.setAttribute = ('src','foto-bebef.png')
    } else if (idade<12){
        img.setAttribute('src','foto-menina.png')
        }
    else if (idade<=22){
        img.setAttribute = ('src','foto-adolescentef.png')
    }
    else if (idade<=60){
        img.setAttribute = ('src','foto-mulher.png')
    }
    else {img.setAttribute = ('src','foto-idosa.png')}
}
res.innerHTML = `Você é ${genero} e tem ${idade} anos!`
res.appendChild(img)
}



}