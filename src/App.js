import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Game } from "./Game";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Game />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
