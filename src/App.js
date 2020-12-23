import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import { CharacterScreen } from "./Screens/CharacterScreen";
import "./App.css";
function App() {
  return (
    <Router>
      <Route path="/" component={HomeScreen} exact></Route>
      <Route path="/:id/:author" component={CharacterScreen} exact></Route>
    </Router>
  );
}

export default App;
