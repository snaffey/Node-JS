/*
Modulos do propio nuclueo do node:
net - Modulo de interação com o diversos protocolos tcp.
Deste modo é possivel controlar a transmissão de dados.
*/

var net = require('net');

var server = net.createServer(function(connection){
    console.log('Client connected');
    connection.on('end', function(){
        console.log('Client disconnected');
    });

    connection.write('Hello World! Eu sou o servidor\n');
    connection.pipe(connection);
});

server.listen(8080, function(){
    console.log('Server is listening');
});

