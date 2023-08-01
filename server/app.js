const express=require('express');
const http=require('http');
const Server=require("socket.io").Server;
const app=express();
const path=require('path');
const server=http.createServer(app);
const io = new Server(server , {
    cors:{
        origin:"*"
    }
})
const _dirname=path.dirname("");
const buildPath=path.join(_dirname , "../client/build");
app.use(express.static(buildPath));
app.get("/*",function(req,res){
    res.sendFile(
        path.join(_dirname,"../client/build/index.html"),
        function(err){
            if(err){
                res.status(500).send(err);
            }
        }
    );
})
io.on("connection",(socket)=>{
    console.log("We are connected")
socket.on("chat",chat => {
    io.emit('chat',chat) 
})
    socket.on('disconnext',()=>{
        console.log('disconnected')
    })
})
const PORT=5000;
app.listen(PORT,() => console.log(`Listening to PORT 5000`));