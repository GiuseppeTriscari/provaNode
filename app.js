var http = require("http");

var express = require("express");
var apiServer = express();

var port = 3000;

apiServer.listen(port, () => {
    console.log("server running on port ", port);
});

apiServer.get("/nome", (req, res) =>{
    console.log("ho ricevuto una get su nome");
    res.send("Ciao, il nome del server è: NODETRISCARI");
});

apiServer.get("/", function(req, res){
    res.send("<h1>Sei in home!</h1>");
})
