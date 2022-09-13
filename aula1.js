/* Node.js */
/*
console.log("Hello World!");

var numMax = 1000;
console.log(numMax);

var generate = function() {
    console.log("generate interno");
    return Math.floor(Math.random()*numMax);
};

console.log("Valor: " + generate());

// module.exports, exports ou this para exportar esta prop.

var test = (module.exports === exports);

var test1 = (module.exports === this);

var test2 = (exports === this);

console.log("Test: " + test + " Test1: " + test1 + " Test2: " + test2);  */
/* Todos correspondem a mesma referencia */

/* A função require é responsável por retornar o que foi exportado de um determinado modulo */

/*
var numMax = 1000;
console.log(numMax);
module.exports.generate = function() {
    return Math.floor(Math.random()*numMax);
};
*/

// Ex2
var numMax = 1000;
module.exports = {
    max: numMax
};