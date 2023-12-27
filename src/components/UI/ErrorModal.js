import React from "react";
import './ErrorModal.css'

const ErrorModal= (props) =>{
    return( <div className="modal">
        <div className="backdrop"   onClick={props.onConfirm}/>
      <header className="header">
        <h2 >{props.title}</h2>
      </header> 
      <div className="content">
      <p >{props.message}</p>
        </div> 
    
      <footer className="actions">
        <button onClick={props.onConfirm}>Okay!</button>
      </footer>
        </div>
    )

}
export default ErrorModal;