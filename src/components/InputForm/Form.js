import React,{useState} from "react";
import './Form.css'
import ErrorModal from "../UI/ErrorModal";
// import Card from "../UI/Card";


const Form= (props) => {
    const [userName, setUsername] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] =useState();
    const submitHandler= (e) =>{
     e.preventDefault();
     if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter valid name and age(non empty values)'
      });
        return;
      }

      if (+userAge < 1) {
        setError({
          title: 'Invalid Age',
          message: 'Please enter valid age( > 0)' })
        return;
      }
  
    props.onAddUser(userName, userAge);
     setUsername('');
     setUserAge('');
    };
 
    const nameChange = (e) =>{
     setUsername(e.target.value);
    }
    const ageChange = (e) =>{
     setUserAge(e.target.value);
    }
    const errorHandler =() =>{
      setError(null);
    }
 
    return(
      <div>
      {error &&  <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>} 
<form id="form" onSubmit={submitHandler}>
<div className="name">
<label>UserName</label> <br/>
<input type="text" onChange={nameChange} value={userName} id="username"/>
<div/>
<div className="age">
<label>Age (Years)</label> <br/>
<input type="number" onChange={ageChange} value={userAge} id="age"/>
</div>
 <button id="btn" type="submit">Add User</button>


</div >
</form>

      </div>




 
    
   

)}

export default Form;