import { useEffect} from 'react';

import Home from './pages/home';
import Game from './pages/game';


import Header from './components/header/header';

import './App.css';

import {
  Switch,
  Route,
} from "react-router-dom";


function App() {

  useEffect(() => {

    document.title = 'Mastermind'
  }, [])

  return (
    <div className="app">
 
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/settings">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
