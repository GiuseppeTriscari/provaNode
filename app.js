var http = require("http");

var express = require("express");
var apiServer = express();

//document.getElementsByName("title").html="NodeTriscari";
var port = 3000;

apiServer.listen(port, () => {
    console.log("server running on port ", port);
});

apiServer.get("/nome", (req, res) =>{
    //document.title="NodeTriscari";
    console.log("ho ricevuto una get su nome");
    res.send('<label style="background-color:lightblue;">Ciao, il nome del server è: NODETRISCARI</label>');
});

apiServer.get("/", function(req, res){
    //document.title="NodeTriscari";
    res.send('<label style="background-color:green;">Sei in home!</label>');
})
