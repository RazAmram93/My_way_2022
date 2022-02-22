import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function GameCard(props) {
    let {id, img, game_Name, desc, location} = props.game;
    let Delete_Game;
    let btn_and_func;

    //Checking if the game is at home or friend and initialaize the rigth funcs and btn
    if(location === "Home")
    {
         Delete_Game = <Button style={{background:'red'}} onClick={()=>props.Delete_Game_From_Home(id)} variant="contained">Delete Game</Button>
         btn_and_func =  <Button style={{background:'green'}} onClick={()=>props.From_Home_To_Friend(id)} variant="contained">At Home</Button>
    }else{
        Delete_Game = <Button style={{background:'red'}} onClick={()=>props.Delete_Game_From_Friend(id)} variant="contained">Delete Game</Button>
         btn_and_func = <Button  onClick={()=>props.From_Friend_To_Home(id)} variant="contained">At friend</Button>
    }
    
  return (
    <Card style={{margin:20}}  sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          width="150"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {game_Name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
             {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{alignItems:'center'}}>
          {btn_and_func}
          {Delete_Game}

      </CardActions>
    </Card>
  );
}