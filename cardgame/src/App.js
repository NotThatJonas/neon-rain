
import React from 'react';
import Card from "./components/cards"
import PlayArea from "./components/playArea"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home/home.js";
import Leaderboards from "./pages/leaderboard"
import BattlePage from "./pages/battleArea"
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";

function App() {
  return (
   
      <Router>
        <div>
  
        <Route exact path="/leaderboards" component={Leaderboards} />
        <Route exact path="/" component={Home} />   
        <Route exact path="/battlepage" component={BattlePage} />  
        <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
      </div>
        </Router>

   

  );
}


export default App
