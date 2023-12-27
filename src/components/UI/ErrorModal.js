import React from "react";
import './ErrorModal.css'
import { ReactDOM } from "react";

const Backdrop = (props) =>{
  return ( <div className="backdrop" onClick={props.onConfirm}/>)
};

const ModalOverLay =(props) =>{
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

const ErrorModal= (props) =>{
    return( 
      <React.Fragment>
         {ReactDOM.createPortal(
         <Backdrop onConfirm={props.onConfirm} />, 
         document.getElementById('backdrop-root') 
         )}
          {ReactDOM.createPortal(
          <ModalOverLay title={title.props} message={props.message}  onConfirm={props.onConfirm} />,
          document.getElementById('overlay-root'))}
      </React.Fragment>
    
    )

}
export default ErrorModal;