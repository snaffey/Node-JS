/*
Exemplo de Timers - execução de uma operação e x tempo, setTimeout é de escopo global com tal não é necessário importar.
*/

/*
console.log("Data e Hora: " + new Date());
setTimeout(function() {
    console.log("Data e Hora (Set): " + new Date());
}, 3000);
*/

console.log("Data e Hora: " + new Date());
var a = setTimeout(function() {
    console.log("Data e Hora (Set A): " + new Date());
}, 4000);
var b = setTimeout(function() {
    console.log("Data e Hora (Set B): " + new Date());
}, 4000);

clearTimeout(a);

