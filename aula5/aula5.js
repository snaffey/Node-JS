/*
Módulos do próprio núcleo do Node: 
Http - Usado para relacionar um servidor HTTP e o cliente, é necessário importar a bíblia ('').
*/ 

const { write } = require('fs');
var http = require('http');

// createServer - Cria um servidor HTTP que responde a requisições
// http.listen(xxx) - Inicia um listener na porta xxx

//http.createServer().listen(3000);
// Fica de forma permanente a espera de requisições, uma vez que nao passamos parâmetros para devolver algo

/*
(function(req,res){}) - Função anónima que recebe como parâmetros a requisição e a resposta
res(response) - Resposta que o servidor vai dar ao cliente
*/
// Método write - Escreve no corpo da resposta do servidor ao pedido
// Método end - Sinaliza ao servidor que todos os cabeçalhos e corpo da resposta foram enviados

http.createServer(function(req,res){
    res.write('<html>' + 
    '<head>' + 
    '<title>Resposta do SV </title>' + 
    '</head>' + 
    '<body>' + 
    '<span>Ola thanks for req</span>' + 
    '</body>' + 
    '</html>');
    res.end();
}).listen(3000);