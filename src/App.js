import React from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import routes from "./config/Routes";

function App() {
  return (
    <>
      <React.Fragment>
        <HashRouter>
          <Switch>
            {routes.map((route, idx, props) => (
              <Route
                key={idx}
                path={route.path}
                exact
                component={route.component}
                {...props}
              />
            ))}
          </Switch>
        </HashRouter>
      </React.Fragment>
    </>
  );
}

export default App;
