import React from "react";
import { useDropzone } from "react-dropzone";
import "./App.css"

const Dropzone =({ onDrop , accept })=>{
    //initializing useDropzone hook with options.
    const { getRootProps , getInputProps , isDragActive } = useDropzone({onDrop, accept});

return(
    < div className="dropzone-div" {...getRootProps()}>
        <input className="dropzone-input" {...getInputProps()} />
            <div className="text-center">
                {isDragActive? (
                    <p className="dropzone-content">
                        Release the file to Drop
                    </p>
                ) : (
                    <p className="dropzone-content">
                        Drag "n" Drop the files
                    </p>
                )
                }
            </div>
    </div>
);
            }
            
export default Dropzone;