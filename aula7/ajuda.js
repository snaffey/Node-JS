//Ajuda no chat

var opcoens = ['#name -> Muda o nome do client', '#help -> Mostra os comandos de ajuda'];

exports.mostrarAjuda = function(){
    opcoens.forEach(function(opcao){
        //Mostrar no client e no servidor
        console.log(opcao);
    });
}