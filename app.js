var http = require("http");

var express = require("express");
const { title } = require("process");
var apiServer = express();


var port = 3000;
document.getElementsByTagName('title').html='NodeTriscari';

apiServer.listen(port, () => {
    
    console.log("server running on port ", port);
});

apiServer.get("/nome", (req, res) =>{
    console.log("ho ricevuto una get su nome");
    res.send('<h2><label style="background-color:lightblue;">Ciao, il nome del server è: NODETRISCARI</label></h2>');
});

apiServer.get("/", function(req, res){
    res.send('<h2><label style="background-color:lightgreen;">Sei in home!</label></h2>');
});


