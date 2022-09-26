//Example Server

var http = require('http');
var obj = require("./teste.json");

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;

    console.log("IP: " + ip);

    var listaPaps = obj.paps; // Devolve um array com os paps

    listaPaps.forEach(element => {
        console.log(element.aluno);
        res.write(element.aluno + " ");
        if (element.hasOwnProperty("listatopicos")) {
            var topicos = element.listatopicos.topico;
            res.write(topicos[0].tempo+"\n");
            console.log("---->"+element.listatopicos.topico[0].tempo);
        }
    });
    res.end();
}).listen(8080);