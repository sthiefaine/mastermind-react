import { useEffect } from "react";

import Home from "./pages/home";
import Game from "./pages/game";
import Settings from "./pages/settings";

import Header from "./components/header";
import Footer from "./components/footer";
import Wrapper from "./styles/Wrapper";

import "./App.css";

import "./circles.css";
import "./game.css";
import "./circlesColors.css";

import { Switch, Route } from "react-router-dom";
import { Fade } from "./animations/fade";

function App() {
  useEffect(() => {
    document.title = "Mastermind";
  }, []);

  // console
  useEffect(() => {
    console.log("Bonjour,");
    console.log(
      "%cMastermind in react.js was developed to learn and play with React.js & Redux toolkit (RTK).\n  Find me at:\n  * Twitter : https://twitter.com/dev_thief\n  * Github : https://github.com/sthiefaine\n  * Linkedin : https://www.linkedin.com/in/thiefainesimonnou",
      "color:orange; font-size:20px; font-weight: bold; -webkit-text-stroke: 1px black; border-radius:10px; padding: 20px; background-color: black;"
    );
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
        <Route>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Wrapper>
  );
}

export default App;
