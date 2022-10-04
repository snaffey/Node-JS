var net = require('net');

var client = net.connect(1213);

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.on('connect', function(msg) {
    console.log('sou um cliente');
});

client.on('data', function(msg) {
    console.log(msg.toString());
});

client.on('end',function() {
    console.log('desconectado');
    process.exit();
});

client.on('error', (e) => console.log(e.toString()));

rl.on('line', (input) => {
    show(input.toString().trim());
});

function show(m) {
    console.log('ME:'+ m);
    client.write(`${m}`);
}