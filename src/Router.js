import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";

export default () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
