import React from "react";
import PageTitle from "./PageTitle";

function Home() {
  return (
    <PageTitle title="Your Feed">
      <h2 className="text-center">
        Hello <strong>{localStorage.getItem("reactAppUsername")}</strong>, your
        feed is empty.
      </h2>
      <p className="lead text-muted text-center">
        Your feed displays the latest posts from the people you follow. If you
        don&rsquo;t have any friends to follow that&rsquo;s okay; you can use
        the &ldquo;Search&rdquo; feature in the top menu bar to find content
        written by people with similar interests and then follow them.
      </p>
    </PageTitle>
  );
}

export default Home;

// to show a dynamic name of the user who is logged in we write {localStorage.getItem("reactAppUsername")}
