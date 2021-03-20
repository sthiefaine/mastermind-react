import { useEffect } from "react";

import Home from "./pages/home";
import Game from "./pages/game";
import Settings from "./pages/settings";

import Header from "./components/header";
import Footer from "./components/footer";
import Wrapper from "./styles/Wrapper";

import "./App.css";

import { Switch, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "Mastermind";
  }, []);

  return (
    <Wrapper>
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
      <Footer />
    </Wrapper>
  );
}

export default App;
