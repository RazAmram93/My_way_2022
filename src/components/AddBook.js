import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import RadioBtn from './RadioBtn'

export default function AddBook(props) {
    const [bookName, setBookName] = useState(null);
    const [img, setImg] = useState(null);
    const [author, setAuthor] = useState(null);
    const [location, setLocation] = useState(null)
    
    const Get_Details = () =>{
        props.Add_book(bookName, img, author, location)
    }
  return (
    <div style={{textAlign: 'center', paddingTop:'2rem', paddingBottom:'2rem', border:'solid 2px grey'}}>
    <div style={{margin:25}}>
        <h1>Add book</h1>
        <TextField required id="standard-search" label="Book name" type="search" variant="standard" onChange={(e)=>setBookName(e.target.value)}/><br/>
        <TextField required id="standard-search" label="Img url" type="search" variant="standard" onChange={(e)=>setImg(e.target.value)}/><br/>
        <TextField required id="standard-search" label="Author" type="search" variant="standard" onChange={(e)=>setAuthor(e.target.value)}/><br/>
        <RadioBtn setLocation={setLocation}/>
    </div>
  <Button onClick={Get_Details} style={{background:'black'}} variant="contained">Add Book</Button>
</div>
  )
}
