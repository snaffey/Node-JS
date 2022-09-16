//globalThis.numMax = 1000;

//console.log(global); //listas as var globais do sistema

// Por padrao as variaveis sao globais
// numMax = 1000;
// Retiro linha 6 e coloco no config.js

var configuracao = require('./config.js');

numMax = 1000;
exports.generate = function() {
    return Math.floor(Math.random() * configuracao.numMax);
};