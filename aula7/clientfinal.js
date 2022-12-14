var net = require('net');
var ajuda = require('./ajuda.js');

var client = net.connect(1213);

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.on('connect', function(msg) {
    console.log('Client');

    // Sair depois de 2 minutos
    setTimeout(function() {
        client.end();
    }, 20000);
});

client.on('data', function(msg) {
    console.log(msg.toString());
});

client.on('end',function() {
    console.log('Desconectado');
    process.exit();
});

client.on('error', (e) => console.log(e.toString()));

rl.on('line', (input) => {
    show(input.toString().trim());
});

function show(m) {
    if (m == '#help') {
        ajuda.mostrarAjuda();
    }

    console.log('ME: '+ m);
    client.write(`${m}`);
}