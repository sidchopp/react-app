import React, { useState, useEffect } from "react";
import PageTitle from "./PageTitle";
import Axios from "axios";

function CreatePost() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await Axios.post("/create-post", {
        title,
        body,
        token: localStorage.getItem("reactAppToken"),
        // token is given to us by the server to make sure that no malacious user can use this.
      });
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

export default CreatePost;

// to submit form we give it an attribute of onSubmit which equals a function say handleSubmit
