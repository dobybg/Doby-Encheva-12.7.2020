import React, { useState, ChangeEvent, FormEvent } from "react";


interface AddTaskFormProps {
  addTask: AddTask;
}

export const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
    const [newUsername, setNewUsername] = useState<string>("");
    const [newPhone, setNewPhone] = useState<string>("");
    const [newEmail, setNewEmail] = useState<string>("");

  const handleUserChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUsername(e.target.value);
  };
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPhone(e.target.value);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTask({id: 0, username: newUsername, phone: newPhone, email: newEmail, date: new Date(), complete: false});
    setNewUsername("");
    setNewPhone("");
    setNewEmail("");
    eval("jQuery('#newTask').modal('hide')");
  };

  return (
    <div id="newTask" className="modal" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">משימה חדשה</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">

        <div className="form-row">
    <div className="col-md-4 mb-3">      
      <input type="text" className="form-control" placeholder="שם משתמש" value={newUsername} onChange={handleUserChange} required />
    </div>
    <div className="col-md-4 mb-3">
       <input type="text" className="form-control" placeholder="טלפון" value={newPhone} onChange={handlePhoneChange} required />
    </div>
    <div className="col-md-4 mb-3">      
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" >@</span>
        </div>
        <input type="text" className="form-control" placeholder="מייל" value={newEmail} onChange={handleEmailChange} required />
      </div>
    </div>
  </div>
{/*           
        <input type="text" value={newUsername} onChange={handleUserChange} />
        <input type="text" value={newPhone} onChange={handlePhoneChange} />
        <input type="text" value={newEmail} onChange={handleEmailChange} />      */}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  );
};