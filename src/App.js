import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from "./components/ui/ScrollToTop";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Home from "./components/pages/Home";
import News from "./components/news/News";
import Data from "./components/pages/Data";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import PublicAPI from "./components/pages/PublicAPI";

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
            <Route
              exact
              path="/data"
              render={(props) => (
                <Data {...props} dataset={null} setValue={setValue} />
              )}
            />
            <Route
              exact
              path="/co2"
              render={(props) => (
                <Data {...props} dataset={"co2"} setValue={setValue} />
              )}
            />
            <Route
              exact
              path="/ch4"
              render={(props) => (
                <Data {...props} dataset={"ch4"} setValue={setValue} />
              )}
            />
            <Route
              exact
              path="/sf6"
              render={(props) => (
                <Data {...props} dataset={"sf6"} setValue={setValue} />
              )}
            />
            <Route
              exact
              path="/n2o"
              render={(props) => (
                <Data {...props} dataset={"n2o"} setValue={setValue} />
              )}
            />
            <Route
              exact
              path="/temperatures"
              render={(props) => (
                <Data {...props} dataset={"temperatures"} setValue={setValue} />
              )}
            />
            <Route
              exact
              path="/sealevels"
              render={(props) => (
                <Data {...props} dataset={"sealevels"} setValue={setValue} />
              )}
            />
            <Route
              exact
              path="/glaciers"
              render={(props) => (
                <Data {...props} dataset={"glaciers"} setValue={setValue} />
              )}
            />
            <Route
              exact
              path="/news"
              render={(props) => <News {...props} setValue={setValue} />}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/public_api" component={PublicAPI} />
          </Switch>
          <Footer setValue={setValue} />
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}

export default App;
