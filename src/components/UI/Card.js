import React from 'react';
import './Card.css'
import Form from '../InputForm/Form';
const Card = (props) =>{
    return(
       
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    )


}

export default Card;