const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('HOME');
});


app.get('/', function(req, res){
    res.sendFile(__dirname + '/array.html')
});