var http = require('http'); // Requisição do modulo

var criarProcessRequest = function (porta) { // Criação de uma função que recebe como parâmetro a porta
    var entrada = {}; // Variável que vai guardar os dados de entrada
    var caminhos = {}; // Variável que vai guardar os caminhos
    var metodos = ['GET', 'POST']; // Array com os métodos que vamos aceitar

    metodos.forEach(function (metodo) { // (Linhas 8 e 9) Para todos os métodos do array criamos uma propriedade em caminhos, e coloca como objeto vazio
        caminhos[metodo] = {};
        entrada[metodo.toLowerCase()] = function (path, fn) { // Criamos uma nova propriedade na "entrada" com o nome do método em minúsculas, e como valor uma função que recebe como parâmetros o caminho e a função
            caminhos[metodo][path] = fn;  
        };
    });
    http.createServer(function (req, res) { // Criação do servidor
        res.setHeader('Access-Control-Allow-Origin', '*'); // Permite que todos os domínios possam aceder ao servidor
        if (!caminhos[req.method][req.url]) { // Verifica se o caminho existe no array caminhos
            res.statusCode = 404; // Se não existir, devolve o código 404
            return res.end(); // Termina a execução
        }
        caminhos[req.method][req.url](req, res); // Se existir, executa a função que está associada ao caminho
    }).listen(porta); // Inicia o servidor na porta passada como parâmetro
    return entrada; // Devolve a variável entrada
};
module.exports = criarProcessRequest; // Exporta a função