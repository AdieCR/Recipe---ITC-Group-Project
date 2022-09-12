import React, {useState, useContext} from 'react'
import './SignUp.css'
import {RecipeContext } from '../Context/Context'
import { RegisterContext } from '../Context/RegisterContext'
import axios from 'axios'



export default function SignUp() {

  const {switchToLogIn} = useContext(RegisterContext)
  const {setModalShow} = useContext(RecipeContext)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const [error,setError] = useState([]);
  const {setCurrentUser, setIsLoggedIn} = useContext(RecipeContext)
  function clearError(){
    setIsLoading(true);
    setError([]);
  }


async function toSignUp(e){
    e.preventDefault()
    const tempError = [];
    if (!firstName) {
      tempError.push('First name is required');
      setIsLoading(false);
    }
    if (!lastName) {
      tempError.push('Last name is required');
      setIsLoading(false);
    }
    if (!email) {
      tempError.push('Email is required');
      setIsLoading(false);
    }
    if (!emailRegexp.test(email)) {
      tempError.push('Email is invalid');
      setIsLoading(false);
    }

    if (!password) {
      tempError.push('Password is required');
      setIsLoading(false);
    }
    if (!passwordConfirm) {
      tempError.push('Password confirmation is required');
      setIsLoading(false);
    }
    if (password !== passwordConfirm) {
      tempError.push("Passwords don't match");
      setIsLoading(false);
    }
    if(tempError.length === 0) {
    try{
      const newUser = {
        fname: firstName,
        lname: lastName,
        email: email,
        password: password,
        repassword: passwordConfirm,
        
      }
      const user = await axios.post('http://localhost:5000/user/signup', newUser,{withCredentials:true})
      console.log(user)
      setModalShow(false)
      if (user.data.ok){
        setIsLoggedIn(true)
        const {data} = await axios.get('http://localhost:5000/user/id', {withCredentials:true})
        setCurrentUser(data)
      }
    }catch(err){
        tempError.push(err);
    }
}}




  return (
    <form className="boxContainerLog" onSubmit={toSignUp}>
        <div className="formContainer">
            <input type='text' className="input" placeholder='First Name'onChange={e=>setFirstName(e.target.value)} required onClick={clearError}></input>
            <input type='text' className="input" placeholder='Last Name'onChange={e=>setLastName(e.target.value)}  required onClick={clearError}></input>
            <input type='email' className="input" placeholder='Email'onChange={e=>setEmail(e.target.value)}  required onClick={clearError}></input>
            <input type='password' className="input" placeholder='Password'onChange={e=>setPassword(e.target.value)}  required onClick={clearError}></input>
            <input type='password' className="input" placeholder='Confirm Password'onChange={e=>setPasswordConfirm(e.target.value)} required onClick={clearError}></input>
            <div className="marginer"></div>
            <button  className='submitButton' type='submit' >Sign Up</button>
            <div className="marginer"></div>
            <div className='s'>Already have an account? <span className='bold' onClick={switchToLogIn}>Log in</span></div>
            <div className="warning">
            {isLoading? (null): (error[0])}
              </div>
        </div>
    </form>
  )
}
