"use strict";

/*
Exemplo de Timers - execução de uma operação e x tempo, setTimeout é de escopo global com tal não é necessário importar.
*/

/*
console.log("Data e Hora: " + new Date());
setTimeout(function() {
    console.log("Data e Hora (Set): " + new Date());
}, 3000);
*/

/*
console.log("Data e Hora: " + new Date());
var a = setTimeout(function() {
    console.log("Data e Hora (Set A): " + new Date());
}, 4000);
var b = setTimeout(function() {
    console.log("Data e Hora (Set B): " + new Date());
}, 4000);
*/
//clearTimeout(a);
//Desafio
// Entra em loop

/*
var i = function(chamada , tempo){ // A função recebe dois parâmetros, chamada e tempo
    setTimeout(function(){ // A função setTimeout recebe uma função 
        chamada(); // È chamada a função
        i(chamada,tempo) // A função é chamada novamente com os mesmos parâmetros
    },tempo) // O tempo de espera é o mesmo 
}
i(function(){ // A função é chamada 
    console.log('I: '+new Date()) // Mostra a data e hora
},1000); // O tempo de espera é de 1 segundo
*/
//Loop 

/*
var loop = function(tempo){
    console.log('I: '+new Date());
    clear();
}
setInterval(loop,1000);
*/
//Minha solução

/*
var clear = function(){
    setTimeout(function(){
        clearInterval(loop);
        console.clear();
    },1000);
}*/
//Solução do professor

/*
var setI = setInterval(function(){
    console.clear();
    console.log('I: '+new Date());
},1000);
setTimeout(function(){
    clearInterval(setI);
},10000);
*/

/* Exemplo de retorno do tempo de execução */
console.time('contar');
setTimeout(function () {
  console.timeEnd('contar');
}, 5000);