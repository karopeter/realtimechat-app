const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(server, {
    cors: {
       origin: "*",
    }
});

io.on("connection", (socket) => {
   //console.log(`User is connected with id: ${socket.id}`);

   socket.on("btn_clicked", () => {
     //console.log("Clicked");
     io.emit("do_smt")
   });
});


server.listen(3001, () => {
    console.log("Server is running on port 3001");
})