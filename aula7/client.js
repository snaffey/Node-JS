var net = require('net');

// net.connect - Cria uma nova conexão com o servidor.

var client = net.connect({port: 8080}, function(){
    console.log('Client connected');
});

//data, disponiblidade de dados enviados pelo servidor.

client.on('data', function(data){
    console.log('Enviado pelo sv->' + data.toString());
    client.end();
});

//end, quando o servidor fecha a conexão.

client.on('end', function(){
    console.log('Client disconnected');
});