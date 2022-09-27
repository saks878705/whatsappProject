const express = require("express");
const app = express();
const http = require('http').createServer(app);

const PORT = process.env.port || 5000;

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.use(express.static(__dirname + '/public'))

http.listen(PORT,()=>{
    console.log("Server listning at 5000");
});

//socket

const io = require("socket.io")(http);
io.on('connection',(socket)=>{
    console.log("Socket connected");
    socket.on('message',(msg)=>{
        socket.broadcast.emit('message',msg)
    })
})