import React, { useEffect } from "react";

function HeaderLoggedIn(props) {
  
function handleLogout() {
  // Here We are leveraging the prop defined in the child component HeaderLoggedIn (inside parent component of Menubar)
  props.setLoggedIn(false);
  // to use local storgae of the browser to remove the info of user,as well, when Sign out button is clicked
  localStorage.removeItem("reactAppToken");
  localStorage.removeItem("reactAppUsername");
  localStorage.removeItem("reactAppAvatar");
}

  return (
    <div className="flex-row my-3 my-md-0">
      <a href="#" className="text-white mr-2 header-search-icon">
        <i className="fas fa-search"></i>
      </a>
      <span className="mr-2 header-chat-icon text-white">
        <i className="fas fa-comment"></i>
        <span className="chat-count-badge text-white"> </span>
      </span>
      <a href="#" className="mr-2">
        <img
          className="small-header-avatar"
          src={localStorage.getItem("reactAppAvatar")}
        />
      </a>
      <a className="btn btn-sm btn-success mr-2" href="/create-post">
        Create Post
      </a>
      <button onClick={handleLogout} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  );
}

export default HeaderLoggedIn;

//When user clicks on signed out button, it will set the loggedIn piece of state to FALSE ie it will lead us back to HeaderLoggedOut
// Inside image element, in src attribute we are using the image that is stored in the local storage of the browser
