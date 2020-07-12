import React from "react";

interface TaskListItemProps {
    task: Task;
}


export const TaskListItem: React.FC<TaskListItemProps> = ({
    task,
  }) => {
    return (
    <tr>
        <td><input type="checkbox"></input> {task.username}</td>
        <td>{task.phone}</td>
        <td>{task.email}</td>
        <td>
            <span className="align-text-bottom">
            { task.complete ? <img src="./icons/checkmark.png"></img> : null }                
            </span>
             {task.date.toDateString()}
        </td>
        <td>
        <div className="row text-center">
          <div className="col-xs-2 pl-3">
            <figure>
                <a><img src="./icons/view.png" alt="צפייה" /></a>
                <figcaption>צפייה</figcaption>
            </figure>
          </div>
          <div className="col-xs-2 pl-3">
            <figure>
                <a><img src="./icons/edit.png" alt="עריכהה" /></a>
                <figcaption>עריכה</figcaption>
            </figure>
          </div>
          <div className="col-xs-2 pl-3">
            <figure>
                <a><img src="./icons/delete.png" alt="מחיקה" /></a>
                <figcaption>מחיקה</figcaption>
            </figure>
          </div>
        </div>
            {/* <a><img src="./icons/view.png"></img>צפייה</a>
            <a><img src="./icons/edit.png"></img>עריכה</a>
            <a><img src="./icons/delete.png"></img>מחיקה</a> */}
        </td>
    </tr>  
    );
};