import React, { useEffect } from "react";
import BasicContainer from "./BasicContainer";

function PageTitle(props) {
  // We useEffect to load the title for only the first time, beacuse we don't need to re render the title again and again for each page
  useEffect(() => {
    document.title = `${props.title} | SidApp`;
    window.scrollTo(0, 0);
  }, []);
  return <BasicContainer wide={props.wide}>{props.children}</BasicContainer>;
}

export default PageTitle;

// to make BAsicContainer dynamis we used : wide={props.wide}
