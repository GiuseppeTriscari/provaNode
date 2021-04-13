var http = require("http");

var express = require("express");
const { title } = require("process");
var apiServer = express();


var port = 3000;

apiServer.listen(port, () => {
    
    console.log("server running on port ", port);
});

apiServer.get("/", function(req, res){
    res.send('<h2><label style="background-color:lightgreen;">Sei in home!</label></h2>');
});

apiServer.get("/nome", (req, res) =>{
    console.log("ho ricevuto una get su nome");
    res.send('<h2><label style="background-color:lightblue;">Ciao, il nome del server è: Giuseppe</label></h2>');
});

apiServer.get("/somma", (req, res) =>{
    console.log("richiesta: ", req.query);
    if(req.query.a && req.query.b){
        var tot = Number(req.query.a) + Number(req.query.b);
        console.log("tot= ", tot);
        res.status(200);
        res.send("{ \"risultato\" : " + tot + "}");
    }else{
        res.status(500);
        res.send("parametri non corretti");
    }
});


// riceve in ingresso username e password e invia un messaggio "benvenuto [username]"
apiServer.get("/login" , (req, res) => {}); 

// riceve in ingresso username e password e invia un messaggio "benvenuto [username]"
apiServer.post("/login" , (req, res) => {}); 



apiServer.get("/voti" , (req, res) => {
    var voti = [{"data" : "15/11/2020", "voti" : "6", "descrizione" : "matematica"}];

    res.send('<embed src="voti.html">')
});

