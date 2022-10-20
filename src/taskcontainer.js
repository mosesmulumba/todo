import React from "react";
import Dropzone from "./dnd";

const TaskConatiner =()=>{
    return(
    <div>
        <div className="conatiner">
            <div className="pending--wrapper">
                <h3>Pending Tasks</h3>
                  <div className="pending--container">
                    <div className="pending--items">
                        <p>Debug the notification</p>
                        <Dropzone />
                        <p className="comment">
                        <a href="./comments" rel="link">Add Comment</a>
                        </p>
                    </div>
                  </div>
            </div>
                <div className="ongoing--wrapper">
                  <h3>Ongoing Tasks</h3>
                    <div className="ongoing--container">
                        <div className="ongoing--items">
                            <p>Create Design for TODO</p>
                            <Dropzone />
                            <p className="comment">
                            <a href="./comments" rel="link">Add Comment</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="completed--wrapper">
                  <h3>Completed Tasks</h3>
                    <div className="completed--container">
                        <div className="completed--items">
                            <p className="completed--items--p">Completed Designs</p>
                            <Dropzone />
                            <p className="comment">
                                <a href="./comments.js" rel="link">Add Comment</a>
                            </p>
                        </div>
                    </div>
                </div>
        </div>
     </div>
    );
}
export default TaskConatiner;