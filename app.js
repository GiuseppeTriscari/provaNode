/*
var http = require("http");

//express
var express = require("express");
var apiserver = express();

var hostname = "127.0.0.1";
var port = 3000;

var nome = "nodeTrisca"

apiserver.listen(port, hostname, () => {
    console.log("server running at http://%s:%d/", hostname, port);
});

apiserver.get("/nome", (req, res) =>{
    console.log("ho ricevuto una get su nome");
    res.send("Ciao, il nome del server è: "+ nome);
});

apiserver.get("/", function(req, res){
    res.send("home");
});


//pagina html
var path = require("path");

apiserver.get("/index.html", (req, res) =>{
    res.sendFile(path.join(__dirname + '/index.html'));
   
});

apiserver.get("/mionome", function(req, res){
    console.log("ho ricevuto: ", req.query.nome)
    res.send("il nome del server è "+ req.query.nome);
});


//get SOMMA
apiserver.get("/somma")

*/

var http = require("http");

var express = require("express");
var apiServer = express();

var port = 3000;

apiServer.listen(port, () => {
    console.log("server running on port ", port);
});

apiServer.get("/nome", (req, res) =>{
    console.log("ho ricevuto una get su nome");
    res.send("Ciao, il nome del server è: ".req.query.nome);
});

apiServer.get("/", function(req, res){
    res.send("sei in home");
})
