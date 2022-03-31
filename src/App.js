import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={process.env.PUBLIC_URL}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
