//Events

// const event=require('events');
// const fs=require("fs");
// const { Http2ServerRequest } = require('http2');

// const myEmitter=new event.EventEmitter();

// myEmitter.on('fileDone', ()=>{
//     console.log("file has been read successfully");
// })

// fs.readFile('test.txt','utf-8',(err,data)=>{
//     if(err) return console.log("Error was there");
//     myEmitter.emit('fileDone');
// })

//create the similary emitter for a write operation.


// Creation of server using Http

// "/"-localhost:3000;
// /about-localhost:3000/about

// const http=require('http');

// http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.end("Home page");
//     }else if(req.url==="/about"){
//       res.end("about");
//     }else{
//         res.end("Page not found");
//     }
// }).listen(3000,()=>{
//     console.log("Server is running on port 3000");
// })


//express server

const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send("Welcome to the home page");
})

app.get("/about",(req,res)=>{
    res.send("Welcome to about page");
})

app.get("/contact",(req,res)=>{
    res.send("Contact");
})

app.listen(8080, ()=>{ console.log("Server running on port 8080")});

