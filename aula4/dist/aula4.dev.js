"use strict";

/*
Process - Instancia de um determinado programa em execução.
node.js fornece uma variavel que retorna todos os processos em execução no SO
*/

/*
Object.keys(global).forEach(function(value){
    console.log(value);
});
*/

/*
Object.keys(process).forEach(function(value){
    console.log(value);
});
*/
//console.log(process.argv);

/*
Process.argv.array.forEach(function(value){
    console.log(value);
});
*/
var options = process.argv.slice(2);

switch (options[0]) {
  case 'pid':
    console.log(process.pid);
    break;

  case 'arch':
    console.log(process.arch);
    break;

  case 'platform':
    console.log(process.platform);
    break;

  default:
    console.log('opção inv');
}