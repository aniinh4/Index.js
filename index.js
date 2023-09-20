var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  var dataAtual = new Date();
  var dataFormatada = dataAtual.toDateString();

  res.end('Ana Clara F de Oliveira\nData atual: '+ dataFormatada);
}).listen(8030);
