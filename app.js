var http = require("http");

//express
var express = require("express");
var apiserver = express();

var hostname = "127.0.0.1";
var port = 3000;

var server = http.createServer((req, res) => {
    console.log("req:", req);
    res.statusCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.end("Ciao belloccio!");
});

server.listen(port, hostname, () => {
    console.log("server running at http://%s:%d/", hostname, port);
});

apiserver.get("nome", ()=>{
    
});