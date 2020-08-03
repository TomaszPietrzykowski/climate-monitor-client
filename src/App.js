import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route
            exact
            path="/datasets"
            component={() => <div>All Datasets</div>}
          />
          {/* <Route
            exact
            path="/atmpspheric_co2"
            component={() => <div>Co2</div>}
          />
          <Route
            exact
            path="/other_greenhouse_gases"
            component={() => <div>Other greenhouse gases</div>}
          />
          <Route
            exact
            path="/temperatures"
            component={() => <div>Temperatures</div>}
          />
          <Route
            exact
            path="/oceans"
            component={() => <div>Ocean levels</div>}
          />
          <Route exact path="/ice_mass" component={() => <div>Ice mass</div>} /> */}
          <Route exact path="/newsfeed" component={() => <div>News</div>} />
          <Route exact path="/about" component={() => <div>About main</div>} />
          <Route
            exact
            path="/about_data"
            component={() => <div>About data</div>}
          />
          <Route
            exact
            path="/about_monitor"
            component={() => <div>About climate monitor</div>}
          />
          <Route exact path="/contact" component={() => <div>Contact</div>} />
          <Route
            exact
            path="/public_api"
            component={() => <div>Public API</div>}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
