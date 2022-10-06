import React, { useState } from "react";

const AddTask =()=>{
    const [ task , setTask ] = useState("");

    const handleTask =(e)=>{
        e.preventDefault();
        setTask("");
    }
    return(
        <div className="form--input" onSubmit={handleTask}>
            <label></label>
            <input
              type="text"
              name="task"
              id="task"
              required
              onChange={(e)=>setTask(e.target.value)}
              value={task}
              />
              <button className="addtask-btn">ADD TASK</button>
        </div>
    );
}

export default AddTask;