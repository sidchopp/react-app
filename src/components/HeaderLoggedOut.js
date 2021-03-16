import React, { useState } from "react";
import Axios from "axios";

function HeaderLoggedOut(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // variable response will store the response (of our post req) from server
      const response = await Axios.post("http://localhost:8080/login", {
        username,
        password,
      });
      if (response.data) {
        // to get the body or data from the response of server
        console.log(response.data);
        // to store the data coming as response inside the local storage of the browser,
        // so that when we refresh the page the entered/displayed data stays there in the browser
        //1st arg is the name we assign to this data and 2nd is what data we want to store
        localStorage.setItem("reactAppToken", response.data);
        localStorage.setItem("reactAppUsername", response.username);
        localStorage.setItem("reactAppAvatar", response.avatar);
        // to leverage setLoggedIn prop, defined in HeaderLoggedOut component, we use the props here
        props.setLoggedIn(true);
      } else {
        console.log("Incorrect username / password.");
      }
    } catch (e) {
      console.log("There was a problem.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
      <div className="row align-items-center">
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            className="form-control form-control-sm input-dark"
            type="text"
            placeholder="Username"
            autoComplete="off"
          />
        </div>
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="form-control form-control-sm input-dark"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="col-md-auto">
          <button className="btn btn-success btn-sm">Sign In</button>
        </div>
      </div>
    </form>
  );
}

export default HeaderLoggedOut;
