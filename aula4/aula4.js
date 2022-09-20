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

/*
var ajuda = require('./ajuda.js');
var options = process.argv.slice(2);
if (options.length < 1) {
    ajuda.mostrarAjuda();
    return;
}
switch(options[0]){
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
        ajuda.mostrarAjuda();
}
*/

/*
var minhaConsola = {
    log: function(msg){
        process.stdout.write(msg + '\n');
    },
    error: function(msg){
        process.stderr.write(msg + '\n');
    }
};
*/

//minhaConsola.log("Tiago via a minha consola");

//exports.minhaConsola = minhaConsola;

// Leitura via teclado

console.log("Escreva algo: ");
process.stdin.on('readble', function(){
    var caracterLido = process.stdin.read();
    if (caracterLido) 
        console.log("Caracter lido: " + caracterLido.toString());  
})