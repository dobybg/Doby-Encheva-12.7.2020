import express from 'express';
import {Task} from './task';

const app = express();
const port = 3000;

let _tasks = [];
let _lastTaskId = 0;

app.get('/tasks', (req, res)=>{
    res.send(_tasks);
});
app.post('/createTask', (req, res)=>{
    const task = req.body.task as Task;
    createTask(task);
    res.send({});
});
app.post('/updateTask', (req, res)=>{
    const task = req.body.task as Task;
    updateTask(task);
    res.send({});
});
app.post('/deleteTask', (req, res)=>{
    const id = req.body.id as number;
    deleteTask(id);
    res.send({});
});

function getAllTasks() {
    return _tasks;
}

function createTask(task: Task) {
    task.id = ++_lastTaskId;
    _tasks.push(task);
}

function updateTask(task: Task) {
    var index = _tasks.findIndex(m => m.id == task.id);

    if(index != -1) {
        _tasks[index] = task;
    }
}

function deleteTask(id: number) {
    var index = _tasks.findIndex(m => m.id == id);

    if(index != -1) {
       _tasks.splice(index, 1);
    }
}

app.listen(port, err => {
    if(err){
    return console.log(err);
    } 
    return console.log("Server has started at port 3000");
  });