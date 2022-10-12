import React , { useCallback } from "react";
import Dropzone from "react-dropzone";

function App(){
    const onDrop = useCallback(acceptedFiles=>{
        console.log(acceptedFiles);
    }, []);

    return(
        <main className="App" key={onDrop.id}>
            <h1 className="text-center">
                Drag and Drop
            </h1>
            <Dropzone onDrop={onDrop} />
        </main>
    );
}

export default App;