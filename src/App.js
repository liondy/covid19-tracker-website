import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./config/Routes";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <>
      <React.Fragment>
        <BrowserRouter>
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
        </BrowserRouter>
      </React.Fragment>
      <Footer />
    </>
  );
}

export default App;
