import React, { useState, useEffect } from "react";
import PageTitle from "./PageTitle";
import Axios from "axios";
import {withRouter} from 'react-router-dom'

function CreatePost(props) {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      //storing the response from the server( in a varibale named response or anything) when we sent the server this post req
      const response = await Axios.post("/create-post", {
        title,
        body,
        // token is given to us by the server to make sure that no malacious user can  sign.
        token: localStorage.getItem("reactAppToken"),
        
        
      });
      console.log(`this is the response:`, response.data)
      // to redirect the user to new screen/webpage/URL after posting the data
// to work with react router history we use a tool called "withRouter"
//here we are redirecting our App to the url of the newly created post based on it's unique id as response.data is the unique id server sends us
      props.history.push(`/post/${response.data}`)


      console.log("new post created");
    } catch (e) {
      console.log("There was a problem with this post");
    }
  }

  return (
    <PageTitle title="Create New Post">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="post-title" className="text-muted mb-1">
            <small>Title</small>
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            name="title"
            id="post-title"
            className="form-control form-control-lg form-control-title"
            type="text"
            placeholder=""
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="post-body" className="text-muted mb-1 d-block">
            <small>Body Content</small>
          </label>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            name="body"
            id="post-body"
            className="body-content tall-textarea form-control"
            type="text"
          ></textarea>
        </div>

        <button className="btn btn-primary">Save New Post</button>
      </form>
    </PageTitle>
  );
}

export default withRouter(CreatePost);
// withRouter will pass updated match, location, and history props to the wrapped component(CreatePost here) whenever it renders.
// to submit form we give it an attribute of onSubmit which equals a function say handleSubmit
