var http = require(`http`)

http.createServer (function (req,res){  //res serve para mandar alguma resposta para o usuario
res.end ("Hello World, stay here with me")
}).listen(8081);

console.log ("o servidor estah rodando!")
// CRIACAO DE SERVIDOR HTTP
