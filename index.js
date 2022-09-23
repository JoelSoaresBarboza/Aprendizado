const express = require (`express`); // retorna uma funcao que cria uma variavel
const app = express () // a variavel app recebe funcao express que vem do modulo express
// qualquer coisa que eu for usar do framework eu uso a var app
//sempre a ultima linha do codigo tem que ser o app.listen
//funcao de call back = é uma funcao que é executada ela despara um evento

app.get("/",function (req,res){
    res.send ("Welcome to my app")
})

app.get ("/sobre", function (req,res){
    res.send ("Minha pagina sobre")
})

app.get ("/blog",function (req,res){
    res.send ("Bem-vindo ao meu blog")
})  //app.get para criar uma rota
app.listen (8081,function(){
    console.log (`Servidor Rodando na url http://localhost:8081`)
}); 
//express é orientado por rotas