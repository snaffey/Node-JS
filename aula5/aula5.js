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

/*
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
*/

/*var pessoas = [
    {nome: 'Sergio', idade: 40},
    {nome: 'Ana', idade: 30},
    {nome: 'Rui', idade: 20},
    {nome: 'Maria', idade: 10}
];*/

// Método JSON.stringify - Converte um objeto em string
/*
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*'); // * - Todos os domínios podem aceder ao servidor
    res.write(JSON.stringify(pessoas));
    res.end();
}).listen(3000);
*/

// Exemplo 2

var pessoas = [
    {nome: 'Sergio', idade: 40, salário: 1000},
    {nome: 'Ana', idade: 30, salário: 2000},
    {nome: 'Rui', idade: 20, salário: 3000},
    {nome: 'Maria', idade: 10, salário: 4000}
];

var cursos = [
    {nome: 'Programação', duração: 10, local: 'Funchal', cursta: 5000},
    {nome: 'Bases de Dados', duração: 20, local: 'Porto Santo', cursta: 6000},
    {nome: 'Redes', duração: 30, local: 'Porto Moniz', cursta: 7000},
];

var erro = {erro: 'Não foi possível obter os dados'};

// Controlar propriedades, req.url indica o valor que foi passado na requisição
/*
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log("REQ.url" + req.url);
    if(req.url == '/pessoas')
        res.write(JSON.stringify(pessoas));
    else if(req.url == '/cursos')
        res.write(JSON.stringify(cursos));
    else
        res.write(JSON.stringify(erro));
    res.end();
}).listen(3000);
*/
/* Testar as rotas
http://localhost:3000/pessoas
http://localhost:3000/cursos
*/

var request = require('./request'); // Importar o módulo request.js

var app = request(1212); // Iniciar o servidor na porta 1212

app.get('/pessoas', function(req, res){ // Criar uma rota para pessoas
    res.write(JSON.stringify(pessoas)); // Escrever no corpo da resposta
    res.end(); 
});
app.get('/cursos', function(req, res){ // Criar uma rota para cursos
    res.write(JSON.stringify(cursos)); // Escrever no corpo da resposta
    res.end();
});