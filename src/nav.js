import React from "react";
import AddTask from "./Addtask";

const Navbar=()=>{
    return(
        <div className="navbar--top">
            <h3>Team's to do List</h3>
            <AddTask />
        </div>
    );
}

export default Navbar;