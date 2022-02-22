import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import Footer from '../Footer';
import User from './User';


export default function Register() {
  if (localStorage.CurrentUser !== undefined)
{
   alert('You already a Logged user! Go home!(Logout to create a new acount)')
   window.location.href = "/home";
}
const [email, setEmail] = useState(null);
const  [name, setName] = useState(null)    
const [password, setPassword] = useState(null)
const [conPass, setConPass] = useState(null)
const [dob, onChange] = useState(new Date());


const btnRegister = () => {
  //Creating regex for email check
  const emailRegEx = /[a-zA-Z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,8}(.[a-z{2,8}])?/
  //Details validation
  if(!(emailRegEx.test(email))){ alert(`Invalid email`); return}
  if(name === null || name.length<=2) {alert(`Invalid user name. must be 3 char or more.`); return}
  if(password !== conPass) {alert(`The passwords don't match`); return }
  if(dob.getFullYear() > 2012) {alert(`You must be 10 years old or more`); return}

  let day = dob.getDate();
  let month = dob.getMonth()+1;
  let year = dob.getFullYear();

  //Creating string for the date of birth
  let dateOfBirth = day+"/"+month+"/"+year;

  //Creating new user 
  let newUser = new User(email, name, password, dateOfBirth)

  //Checking if users list in local storage is not empty
  if(localStorage.users != undefined){
  //Retrive the users list from local storage
  let users = JSON.parse(localStorage.users)
  //Binding the list with the new user
  let newUsers = [...users, newUser]
  //Insert the new list to local storage
  localStorage.users = JSON.stringify(newUsers)
  } else {
    //If local storage list is empty - add the new user
  localStorage.users = JSON.stringify([newUser])}

  alert(`Welcome  ${name}`)
  //Navigate to login page
  window.location.href = "/";
}

  return (
    <div>
       <div style={{textAlign: 'center', paddingTop:'5rem', paddingBottom:'5rem'}}>
         <h2>Register</h2>
         <TextField required id="standard-search" label="Email" type="search" variant="standard" onChange={(e)=>setEmail(e.target.value)}/><br/>
         <TextField required id="standard-search" label="Name" type="search" variant="standard" onChange={(e)=>setName(e.target.value)}/><br/>
         <TextField required id="standard-search" label="Password" type="password" variant="standard" onChange={(e)=>setPassword(e.target.value)}/><br/>
         <TextField required id="standard-search" label="Confirm password" type="password" variant="standard" onChange={(e)=>setConPass(e.target.value)}/><br/>
         <h3>Date of birth</h3>
         <h3>{dob.getDate()}/{dob.getMonth()+1}/{dob.getFullYear()}</h3>
         <div style={{position:'relative'}}>
         <Calendar onChange={onChange} value={dob}/>
         </div>
         <Button onClick={btnRegister} variant="contained">Register</Button>
      </div>
     <Footer/>
    </div>
  )
}
