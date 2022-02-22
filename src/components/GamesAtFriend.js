import React from 'react'
import GameCard from './GameCard'
import { Grid } from '@mui/material';


export default function GamesAtFriend(props) {
    let friend_str = props.gamesAtFriend.map((game)=><GameCard key={game.id} game={game} From_Friend_To_Home={props.From_Friend_To_Home} Delete_Game_From_Friend={props.Delete_Game_From_Friend}/>)

  return (
    <div>
        <Grid style={{justifyContent:'center'}} container>
        {friend_str}
        </Grid>
    </div>
  )
}
