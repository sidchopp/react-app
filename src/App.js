import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'



import Menubar from './components/Menubar'
import Mainpage from "./components/Mainpage"
import Home from "./components/Home"
import Footer from "./components/Footer"
import About from "./components/About"
import Terms from "./components/Terms"
import CreatePost from './components/CreatePost'

import Axios from 'axios'
// set default url for all axios request. SO now this url will be the beginning potion for all requests to axios
Axios.defaults.baseURL = 'http://localhost:8080'


function App() {
  // to "LIFTING THE STATE UP" the Tree, we are using the state in our App (ie our main) component
  // to show different header/menubar based on whether the user is logged in or out
  //If something is stored in local storage of browser, we set the initial value of our state to be true, otherwise false
  //SO now even if we refresh the page after loggin in, our App remembers that we are logged In
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("reactAppToken")))
  return (
    <BrowserRouter >
      <Menubar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route path="/" exact>
          {loggedIn ? <Home /> : <Mainpage />}
        </Route>
        <Route path="/create-post" exact >
          <CreatePost />
        </Route>
        <Route path="/about-us" exact>  <About /> </Route>
        <Route path="/terms" exact>  <Terms /> </Route>
      </Switch>

      <Footer />

    </BrowserRouter>
  );
}

export default App;

// We want Home component to render data conditionally based on the user is already logged in or not. 
//Hence we used ternary operator. So if the loggedIn is true then it shows Home component otherwise MainPage comp