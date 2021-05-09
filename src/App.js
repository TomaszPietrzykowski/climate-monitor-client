import React, { useState } from "react"
import { ThemeProvider } from "@material-ui/styles"
import theme from "./components/ui/Theme"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import ScrollToTop from "./components/ui/ScrollToTop"
import Header from "./components/ui/Header"
import Footer from "./components/ui/Footer"
import Home from "./components/pages/Home"
import News from "./components/pages/News"
import Data from "./components/pages/Data"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import PublicAPI from "./components/pages/PublicAPI"

function App() {
  const [value, setValue] = useState(0)

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
            <Route
              path="/data/:dataset"
              render={(props) => <Data {...props} setValue={setValue} />}
            />
            <Route exact path="/news" component={News} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/public_api" component={PublicAPI} />
          </Switch>
          <Footer setValue={setValue} />
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  )
}

export default App
