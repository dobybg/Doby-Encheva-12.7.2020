import React from "react";
import { TaskListItem } from "./TaskListItem";

interface TaskListProps {
  tasks: Array<Task>;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks
}) => {
  return (
  <div>
  <div className="row pt-5 pb-2">
  <div className="col-6"><h5> רשימות הלקוחות שלך (128)</h5></div>
  <div className="col-6 text-right"><button className="btn tableBtn" data-toggle="modal" data-target="#newTask">משימה חדשה</button></div>
  </div>
  <table className="table table-hover table-bordered">
  <thead className="thead-light">
    <tr>
      <th><input type="checkbox"></input> שם משתמש</th>
      <th>טלפון</th>
      <th>מייל</th>
      <th>תאריך יצירת המשימה</th>
      <th>פעולות</th>
    </tr>
  </thead>
  <tbody>
  {tasks.map(task => (
        <TaskListItem key={task.id} task={task}/>
      ))}
  </tbody>
</table>
</div>
    );
  };