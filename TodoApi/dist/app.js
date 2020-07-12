"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_1 = require("./task");
const app = express_1.default();
const port = 3000;
let _tasks = [];
let _lastTaskId = 0;
app.get('/tasks', (req, res) => {
    res.send(_tasks);
});
app.get('/createTask', (req, res) => {
    createTask(req.query.username, req.query.phone, req.query.email);
    res.send({});
});
function getAllTasks() {
    return _tasks;
}
function createTask(username, phone, email) {
    let task = new task_1.Task();
    task.id = ++_lastTaskId;
    task.username = username;
    task.phone = phone;
    task.email = email;
    task.date = new Date();
    _tasks.push(task);
}
function editTask() {
}
function deleteTask() {
}
app.listen(port, err => {
    if (err) {
        return console.log(err);
    }
    return console.log("Server has started at port 3000");
});
//# sourceMappingURL=app.js.map