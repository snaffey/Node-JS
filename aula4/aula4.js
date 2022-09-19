/*
Process - Instancia de um determinado programa em execução.
node.js fornece uma variavel que retorna todos os processos em execução no SO
*/
/*
Object.keys(global).forEach(function(value){
    console.log(value);
});
*/

Object.keys(process).forEach(function(value){
    console.log(value);
});

