//Events

const event=require('events');
const fs=require("fs");

const myEmitter=new event.EventEmitter();

myEmitter.on('fileDone', ()=>{
    console.log("file has been read successfully");
})

fs.readFile('test.txt','utf-8',(err,data)=>{
    if(err) return console.log("Error was there");
    myEmitter.emit('fileDone');
})

//create the similary emitter for a write operation.