var numGenerate = require('./aula1.js');
// console.log(numGenerate.generate());

/* verificamos que se encontra {}, isto é tudo o que é exportado é privado, apenas acessível no próprio modulo */

console.log(numGenerate.max);

/* 
Localização de um determinado modulo:
1- O algoritmo tenta encontrar um modulo de core: net,stream,os,vm,util,etc...
2- Senão procura pelo sistema de arquivos
*/