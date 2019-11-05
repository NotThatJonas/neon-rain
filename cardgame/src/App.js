
import React from 'react';
import Card from "./components/cards"
import PlayArea from "./components/playArea"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home/home.js";
import Leaderboards from "./pages/leaderboard"


function App() {
  return (
   
      <Router>
        <div>
  
        <Route exact path="/leaderboards" component={Leaderboards} />
        <Route exact path="/" component={Home} />      
      </div>
        </Router>

   
  );
}


export default App
