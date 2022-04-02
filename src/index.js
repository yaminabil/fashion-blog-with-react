import  ReactDOM  from "react-dom";
import App  from "./App";
import {StrictMode} from 'react'


let root = document.getElementById ("root");


ReactDOM.render(
    
        <StrictMode>
            <App />
        </StrictMode> , root
    
)