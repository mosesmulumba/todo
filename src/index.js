import React from "react";
import  ReactDOM  from "react-dom/client";
import Navbar from "./nav";
import TaskConatiner from "./taskcontainer"
import Comments from "./comments";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <TaskConatiner />
    <Comments />
  </React.StrictMode>
)
