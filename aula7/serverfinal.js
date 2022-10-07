var net = require('net');

var cons = []; // clientes conectados ao servidor

var broadcast = function(msg, origem) {
    cons.forEach(function(con) {
        if (con == origem) return;
        con.write(msg);
    });
};

net.createServer(function(con) {
    cons.push(con);
    con.write('Servidor ativo\n');
    con.on('data', function(msg) {
        var comando = msg.toString();
        console.log('Comando recebido: ' + comando);
        if(comando.indexOf('#name') == 0) {
            var nome = comando.replace('#name', '');
            broadcast(con.nome + ' é ' + nome)
            con.nome = nome;
            return;
        } else if(comando.indexOf('#help') == 0) {
            var ajuda = require('./ajuda.js');
            ajuda.mostrarAjuda();
            return;
        }
        console.log('con -> '+ con.nome);
        broadcast(con.nome + ' -> ' + msg, con);
    });
    
    con.on('end', function() {
        broadcast(con.nome + ' saiu do chat', con);
        // splice (remover conexão pos, qt)
        cons.splice(cons.indexOf(con), 1);
    });

    con.on('error', (e) => console.log(e.toString()));
}).listen(1213);