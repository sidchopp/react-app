import React, { useEffect } from "react";

function BasicContainer(props) {
  return (
    <div
      className={
        "container  py-md-5 " + (props.wide ? "" : "container--narrow")
      }
    >
      {props.children}
    </div>
  );
}

export default BasicContainer;

// {props.children} property makes any nested JSX content available. So whatever content is
//present inside the componets wrapped with <BasicContainer>.

// className={"container  py-md-5 " + (props.wide ? "" : "container--narrow")} means that
// conatiner and py-md-5 is available to all components wrapped in <BasicContainer>,
//but when props wide is true don't use any other class(" " means empty) except conatiner and py-md-5
//only where props wide is false, use  container--narrow along with conatiner and py-md-5
// NOTE we have left a vacant space between 5 and " in py-md-5 ", so that the third class cannosquished with 2nd class
