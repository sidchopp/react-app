import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../stylesheets/main.css'
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut";

function Menubar() {
  // to show different header/menubar based on whether the user is logged in or out
  const [loggedIn, setLoggedIn] = useState()
  return (
    <>
      <header className="header-bar bg-primary mb-3">
        <div className="container d-flex flex-column flex-md-row align-items-center p-3">
          <h4 className="my-0 mr-md-auto font-weight-normal">
            <Link to="/" className="text-white">
              Sid App
          </Link>
          </h4>
          {loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut setLoggedIn={setLoggedIn} />}
        </div>
      </header>

    </>
  );
}

export default Menubar;

//  {loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />} is a ternary operator as we are doing something conditionally:
// if loggedIn(ie username/password combo) is true, the menubar displays HeaderLoggedIn component otherwise displays HeaderLoggedOut component.
// To make that happen we need to keep track of the piece of state within the Menu bar,hence used useState
// To access that piece of state in HeaderLoggedOut component, we pass a prop of setLoggedIn to it.
//Remember {setLoggedIn} represents the value of the prop setLoggedIn