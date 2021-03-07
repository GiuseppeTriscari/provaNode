var http = require("http");

var express = require("express");
const { title } = require("process");
var apiServer = express();


var port = 3000;


apiServer.listen(port, () => {
    document.title='NODETRISCARI';
    console.log("server running on port ", port);
});

apiServer.get("/nome", (req, res) =>{
    //document.title='NodeTriscari';
    console.log("ho ricevuto una get su nome");
    res.send('<h2><label style="background-color:lightblue;">Ciao, il nome del server è: NODETRISCARI</label></h2>');
});

apiServer.get("/", function(req, res){
    //document.title='NodeTriscari';
    res.send('<h2><label style="background-color:lightgreen;">Sei in home!</label></h2>');
});


