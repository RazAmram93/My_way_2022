import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer';

export default function LogIn() {


    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const logOut = () =>{

      localStorage.removeItem('CurrentUser');
    }

    const btnLogIn = () => {
        //Retrive users list from local storage
        let users = JSON.parse(localStorage.users)
        let currentUser;

        //Finding the logged user
        users.map((user)=>{if(user.email === email && user.password === password){
            currentUser = user;
            return
        }})
        //Checking if user found
        if(currentUser === undefined)
          alert(`Invalid email or password...`)
            else
            {
              localStorage.CurrentUser = JSON.stringify(currentUser)
              window.location.href = "/home";
            }
            
    }
    

    // if (localStorage.CurrentUser !== undefined)
    // {
    //    alert('You already a Logged user! Go home!')  
    //    window.location.href = "/home";
    // }
  return (
    <div>
        <div style={{textAlign: 'center', paddingTop:'8rem', paddingBottom:'5rem'}}>
            <h2>Log in</h2>
            <TextField required id="standard-search" label="Email" type="search" variant="standard" onChange={(e)=>setEmail(e.target.value)}/><br/>
            <TextField required id="standard-search" label="Password" type="password" variant="standard" onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
            <Button onClick={btnLogIn} variant="contained"> Log in </Button><br/><br/>
            <h4>not a member? click to register</h4>
            <Button  variant="contained"><Link to='/register' className='nav-links'> Register </Link></Button><br/><br/>
            <Button onClick={logOut} variant="contained">Log-out</Button>

        </div>
        <Footer/>
    </div>
  )
}
