import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/ui/Header";
import Home from "./components/pages/Home";

function App() {
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header value={value} setValue={setValue} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home {...props} setValue={setValue} />}
          />
          <Route exact path="/data" component={() => <div>Datasets</div>} />
          <Route exact path="/news" component={() => <div>News</div>} />
          <Route exact path="/about" component={() => <div>About</div>} />
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
