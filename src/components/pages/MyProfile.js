import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Footer from '../Footer';

export default function MyProfile() {

if (localStorage.CurrentUser === undefined)
{
   alert('You are not a Logged user! Go home!')
   window.location.href = "/home";
}

const [email, setEmail] = useState(null);
const  [name, setName] = useState(null)    
const [password, setPassword] = useState(null)
const [conPass, setConPass] = useState(null)
const [dob, onChange] = useState(new Date());

const btnUpdate = () => {

   let loglog = JSON.parse('CurrentUser')
   console.log(loglog);
 
 }



  return (<div>
     <div style={{textAlign: 'center'}}>
         <h2>Update My profile</h2>
         <TextField required id="standard-search" label="Email" type="search" variant="standard" onChange={(e)=>setEmail(e.target.value)}/><br/>
         <TextField required id="standard-search" label="Name" type="search" variant="standard" onChange={(e)=>setName(e.target.value)}/><br/>
         <TextField required id="standard-search" label="New password" type="password" variant="standard" onChange={(e)=>setPassword(e.target.value)}/><br/>
         <TextField required id="standard-search" label="Confirm password" type="password" variant="standard" onChange={(e)=>setConPass(e.target.value)}/><br/>
         <h3>Date of birth</h3>
         <h3>{dob.getDate()}/{dob.getMonth()+1}/{dob.getFullYear()}</h3>
         <div style={{position:'relative'}}>
         <Calendar onChange={onChange} value={dob}/>
         </div>
         <Button onClick={btnUpdate} variant="contained">Update</Button>
         </div>
            <Footer/>
         </div>)
}
