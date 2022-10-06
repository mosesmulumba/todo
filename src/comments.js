import React, { useState }from "react";

const Comments =()=>{

    const [ comment ,setComment ] = useState("");

    const AddComment=(e)=>{
        e.preventDefault();
        setComment();
    };
    return(
        <div className="comments--wrapper">
            <form onSubmit={AddComment} className="form--comments">
                <textarea
                row={5}
                name="comment"
                id="comment"
                required
                onChange={(e)=>setComment(e.target.value)}
                placeholder="Type your comment........."
                value={comment}
                />
            </form>
            <button className="comment--Btn">ADD COMMENT</button>
        </div>
    );
}

export default Comments;
