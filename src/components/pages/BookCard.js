import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
export default function BookCard(props) {
    let {id, img, book_Name, author, location} = props;
    let btn_and_func;
    let Delete_Book = <Button style={{background:'red'}} onClick={()=>props.Delete_Book(id)} variant="contained">Delete Book</Button>

    if(location === "Home")
    {
         btn_and_func = <Button style={{background:'green'}} onClick={()=>props.Change_Location(id)} variant="contained">At Home</Button>
    }else{
        btn_and_func = <Button onClick={()=>props.Change_Location(id)} variant="contained">At Friend</Button>

    }




  return (
    <div>
         <Card style={{margin:20}}  sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          width="150"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book_Name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
             {author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{alignItems:'center'}}>
          {btn_and_func}
          {Delete_Book}
      </CardActions>
    </Card>
    </div>
  )
}
