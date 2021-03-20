import { useEffect} from 'react';

import Home from './pages/home';
import Game from './pages/game';
import Settings from './pages/settings';


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
<>
 
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
      <footer className="footer">Mastermind in React - @dev_thief</footer>
    </>
  );
}

export default App;
