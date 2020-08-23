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
import CO2 from "./components/pages/CO2";
import CH4 from "./components/pages/CH4";
import SF6 from "./components/pages/SF6";
import N2O from "./components/pages/N2O";
import Temperatures from "./components/pages/Temperatures";
import SeaLevels from "./components/pages/SeaLevels";
import Glaciers from "./components/pages/Glaciers";

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
            <Route exact path="/data" component={Data} />
            <Route exact path="/co2" component={CO2} />
            <Route exact path="/ch4" component={CH4} />
            <Route exact path="/sf6" component={SF6} />
            <Route exact path="/n2o" component={N2O} />
            <Route exact path="/temperatures" component={Temperatures} />
            <Route exact path="/sealevels" component={SeaLevels} />
            <Route exact path="/glaciers" component={Glaciers} />
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
