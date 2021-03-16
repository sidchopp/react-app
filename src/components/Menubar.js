import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../stylesheets/main.css'
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut";

function Menubar(props) {

  return (
    <>
      <header className="header-bar bg-primary mb-3">
        <div className="container d-flex flex-column flex-md-row align-items-center p-3">
          <h4 className="my-0 mr-md-auto font-weight-normal">
            <Link to="/" className="text-white">
              Sid App
          </Link>
          </h4>
          {props.loggedIn ? <HeaderLoggedIn setLoggedIn={props.setLoggedIn} /> : <HeaderLoggedOut setLoggedIn={props.setLoggedIn} />}
        </div>
      </header>

    </>
  );
}

export default Menubar;

//  {loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />} is a ternary operator as we are doing something conditionally:
// if loggedIn(ie username/password combo) is true, the menubar displays HeaderLoggedIn component otherwise displays HeaderLoggedOut component.
// Since we are accessing the state (loggedIn and setLoggedIn) from Menubar component, so we are using props here, 
//so the "values" of loggedIn and setLoggedIn are coming from props

