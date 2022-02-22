import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import RadioBtn from './RadioBtn';


export default function AddGame(props) {
    const [gameName, setGameName] = useState(null);
    const [img, setImg] = useState(null);
    const [desc, setDesc] = useState(null);
    const [location, setLocation] = useState(null)
    
    //This func passes the new game's detaile to MyGmes Comp
    const Get_Details = () =>{
        props.Add_Game(gameName, img, desc, location)
    }

  return (
    <div style={{textAlign: 'center', paddingTop:'2rem', paddingBottom:'2rem', border:'solid 2px grey'}}>
        <div style={{margin:25}}>
            <h1>Add game</h1>
            <TextField required id="standard-search" label="Game name" type="search" variant="standard" onChange={(e)=>setGameName(e.target.value)}/><br/>
            <TextField required id="standard-search" label="Img url" type="search" variant="standard" onChange={(e)=>setImg(e.target.value)}/><br/>
            <TextField required id="standard-search" label="Desc" type="search" variant="standard" onChange={(e)=>setDesc(e.target.value)}/><br/>
            <RadioBtn setLocation={setLocation}/>
        </div>
      <Button onClick={Get_Details} style={{background:'black'}} variant="contained">Add Game</Button>
    </div>
  )
}
