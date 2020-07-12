import React, { useState } from 'react';
import { initialTasks } from "./initialTasks";
import { TaskList } from "./components/TaskList";
import { AddTaskForm } from './components/AddTaskForm';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Array<Task>>(initialTasks);

  const addTask: AddTask = (task) => {
    task.username.trim() !== "" &&
      setTasks([...tasks, task]);
    
  };
   return (
     <div className="container">
        <h1>ניהול משימות</h1>
        <input type="text" className="form-control" placeholder="חיפוש משימה..."></input>
        <TaskList tasks={tasks} />
        <AddTaskForm addTask={addTask} />
     </div>
    
   );  
 }

export default App;
