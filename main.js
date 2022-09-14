//var numGenerate = require('aula1');
// console.log(numGenerate.generate());

/* verificamos que se encontra {}, isto é tudo o que é exportado é privado, apenas acessível no próprio modulo */

//console.log(numGenerate.max);

/* 
Localização de um determinado modulo:
1- O algoritmo tenta encontrar um modulo de core: net,stream,os,vm,util,etc...
2- Senão procura pelo sistema de arquivos
    (./) -> Mesmo local
    ou (../) -> Local anterior
    ou (/) -> Raiz do sistema de arquivos
3- Caso não inicie com ./ ou ../ ou /, a busca sera no node_modules
*/

//Ainda com cache, porque a criação do objeto é feita no modulo da modelo
/*
var numGenerateX = require('aula1');
var numGenerateY = require('aula1');

var testCache = (numGenerateX === numGenerateY) ? true: false;
var testCache3 = (numGenerateX === numGenerateY) ? true: false;

console.log("Teste Cache: " + testCache);
console.log("Teste Cache3: " + testCache3);


console.log(numGenerateX.generate());
console.log(numGenerateY.generate());
*/

var NovoNumGenerator = require('aula1');
var numGenerateX = new NovoNumGenerator();
var numGenerateY = new NovoNumGenerator();