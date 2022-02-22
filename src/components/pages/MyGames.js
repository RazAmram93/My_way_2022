import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import GamesAtFriend from '../GamesAtFriend';
import GamesAtHome from '../GamesAtHome';
import AddGame from './../AddGame';

//Creating list of games
let games_List = [
  {
      id:0,
      img:"https://media.4rgos.it/i/Argos/8559199_R_Z001A?w=750&h=440&qlt=70",
      game_Name:"Spiderman",
      desc:"The amazing spider-man in a new adventure",
      location:"Home"
  },
  {
      id:1,
      img:"https://media.4rgos.it/i/Argos/3370483_R_Z002?w=750&h=440&qlt=70",
      game_Name:"God Of War",
      desc:"Do not be afraid of war. you are the god of war!",
      location:"Home"
  },
  {
    id:2,
    img:"https://media.4rgos.it/i/Argos/4741925_R_Z001A?w=750&h=440&qlt=70",
    game_Name:"Call Of Duty",
    desc:"The best war game ever",
    location:"Home"
  },
  {
    id:3,
    img:"https://media.4rgos.it/i/Argos/1147003_R_Z001A?w=750&h=440&qlt=70",
    game_Name:"GTA The Trilogy",
    desc:"Best three in one disc",
    location:"Home"
  },
  {
    id:4,
    img:"https://media.4rgos.it/i/Argos/7562118_R_Z001A?w=750&h=440&qlt=70",
    game_Name:"Avengers",
    desc:"All the heroes in one game",
    location:"Home"
  },
  {
    id:5,
    img:"https://media.4rgos.it/i/Argos/9481651_R_Z001A?w=750&h=440&qlt=70",
    game_Name:"FIFA 2022",
    desc:"Special edition",
    location:"Home"
  }
]
//Insert the list to the local storage
localStorage.Games = JSON.stringify(games_List)

export default function MyGames() {
  if (localStorage.CurrentUser === undefined)
{
   alert('You are not a Logged user! Go home!')
   window.location.href = "/home";
}
  //Retrive the games list from local storage
  let Games = JSON.parse(localStorage.Games)
  let gameToChangeLocation;

  //Initiolaiz the two types of list according to location
  const [gamesAtHome, setGamesAtHome] = useState(Games.filter((game)=>game.location === "Home"));
  const [gamesAtFriend, setGamesAtFriend] = useState(Games.filter((game)=>game.location === "Friend"));


  const From_Home_To_Friend =(id)=>{
    //Finding the game to change it's location
    Games.filter((game)=>{if(game.id === id){gameToChangeLocation = game; return}})
    gameToChangeLocation.location = "Friend"

    //Creating new list without the specipic game
    let tempGamesList = Games.filter((game)=>game.id !== id)

    //Insert the games list to local storage after location change
    let newGameList = [...tempGamesList, gameToChangeLocation]
    localStorage.Games = JSON.stringify(newGameList)

    //adding the game to the games at friends list
    setGamesAtFriend([...gamesAtFriend, gameToChangeLocation])

    //Creating and adding a new list to indert to the games at home list
    let new_GameAtHome = gamesAtHome.filter((game)=>game.id !== id)
    setGamesAtHome(new_GameAtHome)
}

const From_Friend_To_Home = (id)=>{
    Games.filter((game)=>{if(game.id === id){gameToChangeLocation = game; return}})
    gameToChangeLocation.location = "Home"
    let tempGamesList = Games.filter((game)=>game.id !== id)
    let newGameList = [...tempGamesList, gameToChangeLocation]
    localStorage.Games = JSON.stringify(newGameList)
    setGamesAtHome([...gamesAtHome, gameToChangeLocation])
    let new_Games_At_Friend = gamesAtFriend.filter((game)=>game.id !== id)
    setGamesAtFriend(new_Games_At_Friend)
}

const Delete_Game_From_Friend = (id) =>{
  if (window.confirm('Are you sure you want to delete this game?')) {
    //Creating new list without the game to delete
    let gamesAfterDelete =Games.filter((game)=>game.id !== id)
    //Insert the new list to the local storage
    localStorage.Games = JSON.stringify(gamesAfterDelete)
    //Creating new list and initialize it to the games at friend list
    setGamesAtFriend(gamesAfterDelete.filter((game)=>game.location === "Friend"))
    alert('Game deleted!');
  } else {return}
}

const Delete_Game_From_Home = (id) =>{
  if (window.confirm('Are you sure you want to delete this game?')) {
    let gamesAfterDelete =Games.filter((game)=>game.id !== id)
    localStorage.Games = JSON.stringify(gamesAfterDelete)
    setGamesAtHome(gamesAfterDelete.filter((game)=>game.location === "Home"))
    alert('Game deleted!');
  } else {return}
}

const Add_Game = (gameName, img, desc, location) =>{
  //Checking if one or more of the fields is empty
  if(gameName === null || img === null || desc === null || location === null )
    { alert(`One or more fields are missing`); return }

    //Creating a new game
  let newGame = {
    id:Games.length,
    img:img,
    game_Name:gameName,
    desc:desc,
    location:location
  }

  //Adding the game to local storage
  localStorage.Games = JSON.stringify([...Games,newGame])

  //Adding the game to the list it belongs
  location === "Home"
  ?
  setGamesAtHome([...gamesAtHome, newGame])
  :
  setGamesAtFriend([...gamesAtFriend, newGame])
  alert(`Game added seccessfuly`)
  }

  return (
    <div>
      <AddGame Add_Game={Add_Game}/>
      <h1>My games collection</h1>
      <div className='games'>
      <GamesAtHome gamesAtHome={gamesAtHome} From_Home_To_Friend={From_Home_To_Friend} Delete_Game_From_Home={Delete_Game_From_Home}/>
      <GamesAtFriend gamesAtFriend={gamesAtFriend} From_Friend_To_Home={From_Friend_To_Home} Delete_Game_From_Friend={Delete_Game_From_Friend}/>
      </div>
        <Footer/>
    </div>
  )
}
