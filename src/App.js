import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Menubar from './components/Menubar'
import Mainpage from "./components/Mainpage"
import Footer from "./components/Footer"
import About from "./components/About"
import Terms from "./components/Terms"


function App() {
  return (
    <BrowserRouter >
      <Menubar />
      <Switch>
        <Route path="/" exact>  <Mainpage /> </Route>
        <Route path="/about-us" exact>  <About /> </Route>
        <Route path="/terms" exact>  <Terms /> </Route>
      </Switch>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
