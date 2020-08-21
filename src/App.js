import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from "./components/ui/ScrollToTop";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Home from "./components/pages/Home";
import News from "./components/news/News";

function App() {
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop>
          <Header value={value} setValue={setValue} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} setValue={setValue} />}
            />
            <Route exact path="/data" component={() => <div>Datasets</div>} />
            <Route
              exact
              path="/news"
              render={(props) => <News {...props} setValue={setValue} />}
            />
            <Route exact path="/about" component={() => <div>About</div>} />
            <Route exact path="/contact" component={() => <div>Contact</div>} />
            <Route
              exact
              path="/public_api"
              component={() => <div>Public API</div>}
            />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}

export default App;
