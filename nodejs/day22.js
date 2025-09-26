const express=require('express');
const app=express();

let todos=[
    {id:1,task:"Learn Nodejs",done:false},
    {id:2,task:"Build rest API",done:false}
];


app.get("/api/todos",(req,res)=>{
    res.json(todos);
});

app.get("/api/todos/:id",(req,res)=>{
    const todo=todos.find(t=>t.id===parseInt(req.params.id));

    if(!todo){
        return res.status(404).json({message:"Todo not found"});
    }

    res.json(todo);
})

app.post("/api/todos",(req,res)=>{
    const {task}=req.body;

    if(!task){
        return res.status(400).json({message:"Task is required"});
    }
    const newtodo={
        id:todos.length+1,
        task,
        done:false
    }

    todos.push(newtodo);
    res.status(200).json(newtodo);

});

app.put("/api/todos/:id",(req,res)=>{
    const todo=todos.find(t=> t.id===parseInt(req.params.id));

    if(!todo){
        return res.status(404).json({message:"Todo not found"});
    }

    const {task,done} = req.body;

    if(task!==undefined) todos.task=task;
    if(done!==undefined) todos.done=done;

    res.json(todo);

});


app.delete("/api/todos/:id",(req,res)=>{
    const todo=todos.findIndex(t=> t.id===parseInt(req.params.id));

    if(!todo){
        return res.status(404).json({message:"Todo not found"});
    }

    todos.splice(todo,1);

    res.json({message:"Todo deleted successfylly"});
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
