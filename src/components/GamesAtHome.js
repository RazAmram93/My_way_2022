import React from 'react'
import GameCard from './GameCard'
import { Grid } from '@mui/material';


export default function GamesAtHome(props) {
    let home_str = props.gamesAtHome.map((game)=><GameCard key={game.id} game={game} From_Home_To_Friend={props.From_Home_To_Friend} Delete_Game_From_Home={props.Delete_Game_From_Home}/>)

  return (
    <div>
        <Grid style={{justifyContent:'center'}} container>
        {home_str}
        </Grid>
    </div>
  )
}
