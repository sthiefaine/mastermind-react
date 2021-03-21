import { useEffect } from "react";

import Home from "./pages/home";
import Game from "./pages/game";
import Settings from "./pages/settings";

import Header from "./components/header";
import Footer from "./components/footer";
import Wrapper from "./styles/Wrapper";

import "./App.css";

import { Switch, Route } from "react-router-dom";
import { Fade } from "./animations/fade";

function App() {
  useEffect(() => {
    document.title = "Mastermind";
  }, []);

  return (
    <Wrapper>
      <Fade
        visible={true}
        duration={600}
        animateEnter={true}
        from={{ opacity: 1, y: -300, x: 0 }}
        transformType="translate"
      >
        <Header />
      </Fade>

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
