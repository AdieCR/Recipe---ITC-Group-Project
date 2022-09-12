import React, {useState, useContext} from 'react' 
import './LogIn.css'
import {RegisterContext} from '../Context/RegisterContext';
import { RecipeContext } from '../Context/Context';
import axios from 'axios'

export default function LogIn() {
  const {switchToSignUp} = useContext(RegisterContext)
    const {setModalShow} = useContext(RecipeContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  let error = [];
  function clearError(){
    setIsLoading(true);
    error = [];
  }
 async function handleSubmitLogin(e) {
  e.preventDefault();
  error=[];
  if (!email) {
    error.push('Email is required');
    setIsLoading(false);
  }
  if (!emailRegexp.test(email)) {
    error.push('Email is invalid');
    setIsLoading(false);
  }
  if (!password) {
    error.push('Password is required');
    setIsLoading(false);
  }
    try{
        const newUser = {
          email: email,
          password: password,          
        }
        const user = await axios.post('http://localhost:5000/user/login', newUser)
        setModalShow(false)
        if (user.data.ok){
          const {data} = await axios.get('/user/id', {withCredentials:true})
        
        }
      }catch(err){
          error.push(err);
      }
 }


  
return(
    <form className="boxContainerLog" onSubmit={handleSubmitLogin}>
        <div className="formContainer">
            <input type='email' className="input" placeholder='Email' onChange={e=>{setEmail(e.target.value)}} onClick={clearError}required></input>
            <input type='password' className="input" placeholder='Password' onChange={e=>{setPassword(e.target.value)}} onClick={clearError} required></input>
            <div className="marginer"></div>
            <button  className='submitButton' type='submit'>Log in</button>
            <div className="marginer"></div>
            <div className="marginer"></div>
            <div className='s'>Don't have an account yet? <span className='bold' onClick={switchToSignUp}>Register here</span></div>
            <div className="marginer"></div>
            <div className="warning">
              {isLoading? (null): (error[0])}
              
              </div>
        </div>
    </form>
)


}

