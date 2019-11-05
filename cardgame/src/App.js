
import React from 'react';
import Card from "./components/cards"
import PlayArea from "./components/playArea"
function App() {
  return (
    <div>
      <PlayArea/>
      <div className="row d-flex justify-content-center">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  );
}








export default App
