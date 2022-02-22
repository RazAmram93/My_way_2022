import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import Register from './components/pages/Register';
import MyGames from './components/pages/MyGames';
import MyProfile from './components/pages/MyProfile'
import MyBooks from './components/pages/MyBooks';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/myprofile' exact component={MyProfile} />
          <Route path='/register' exact component={Register} />
          <Route path='/' exact component={LogIn} />
          <Route path='/home' component={Home} />
          <Route path='/mygames' exact component={MyGames} />
          <Route path='/mybooks' component={MyBooks} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
