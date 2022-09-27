//Client

const http = require('http');

const options = {
    hostname: '192.168.40.105',
    port: 1234,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
};

const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', (d) => {
        process.stdout.write("Resposta do sv ->" + d);
    });
});

req.on('error', (error) => {
    console.error(error);
});

req.end();