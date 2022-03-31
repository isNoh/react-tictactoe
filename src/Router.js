import React from "react";

import { Route, Switch } from "react-router-dom";
import App from "./App";

export default () => {
  return (
    <Route exact path="/">
      <App />
    </Route>
  );
};
