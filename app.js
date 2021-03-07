var http = require("http");

var express = require("express");
var apiServer = express();

document.getElementsByName("title").html="NodeTriscari";
var port = 3000;

apiServer.listen(port, () => {
    console.log("server running on port ", port);
});

apiServer.get("/nome", (req, res) =>{
    document.getElementsByName("title").html="NodeTriscari";
    console.log("ho ricevuto una get su nome");
    res.send("Ciao, il nome del server è: NODETRISCARI");
});

apiServer.get("/", function(req, res){
    document.getElementsByName("title").html="NodeTriscari";
    res.send('<h3 style="background-color:green;">Sei in home!</h3>');
})
