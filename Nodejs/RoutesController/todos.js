const express = require('express')
const router = express.Router()
const Todo = require("../Models/todo")

router.get("/todos",async function(req,res)
{
   try{
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    let getResult = await Todo.find()
    console.log(getResult)
    res.send(getResult)
   }
   catch(err){
    console.log(err)
   }

})


router.post("/todos",async function(req,res){
    let{title,completed} = req.body
    console.log (title,completed)
    try{
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
    let todoInstance = new Todo()
    todoInstance.title = title
    todoInstance.completed = completed
    console.log(todoInstance)
    let result = await todoInstance.save()  
    res.send(todoInstance)
    }
    catch(e){
        console.log(e)
        res.status(400).send('Error');
    }
})

module.exports = router