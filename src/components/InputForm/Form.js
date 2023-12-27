import React,{useState, useRef} from "react";
import './Form.css'
import ErrorModal from "../UI/ErrorModal";
// import Card from "../UI/Card";


const Form= (props) => {
  const nameRef = useRef();
  const ageRef = useRef();

    // const [userName, setUsername] = useState('');
    // const [userAge, setUserAge] = useState('');
    const [error, setError] =useState();
    const submitHandler= (e) =>{
     e.preventDefault();
    const enterdName= nameRef.current.value;
    const enterdAge= ageRef.current.value;
     if (enterdName.trim().length === 0 || enterdAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter valid name and age(non empty values)'
      });
        return;
      }

      if (+enterdAge < 1) {
        setError({
          title: 'Invalid Age',
          message: 'Please enter valid age( > 0)' })
        return;
      }
  
    props.onAddUser(enterdAge, enterdName);
    //  setUsername('');
    //  setUserAge('');
    nameRef.current.value= '';
    ageRef.current.value= '';
    };
 
    // const nameChange = (e) =>{
    //  setUsername(e.target.value);
    // }
    // const ageChange = (e) =>{
    //  setUserAge(e.target.value);
    // }
    const errorHandler =() =>{
      setError(null);
    }
 
    return(
      <div>
      {error &&  <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>} 
<form id="form" onSubmit={submitHandler}>
<div className="name">
<label>UserName</label> <br/>
<input type="text" onChange={nameChange} value={userName} id="username" ref={nameRef}/>
<div/>
<div className="age">
<label>Age (Years)</label> <br/>
<input type="number" onChange={ageChange} value={userAge} id="age" ref={ageRef}/>
</div>
 <button id="btn" type="submit">Add User</button>


</div >
</form>

      </div>




 
    
   

)}

export default Form;