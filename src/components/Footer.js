import React from "react";
import "../stylesheets/main.css";

function Footer() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <>
      <footer className="border-top text-center small text-muted py-3">
        <p>
          <a href="/" className="mx-1">
            Home
          </a>{" "}
          |{" "}
          <a className="mx-1" href="/about-us">
            About Us
          </a>{" "}
          |{" "}
          <a className="mx-1" href="/terms">
            Terms
          </a>
        </p>
        <p className="m-0">
          Copyright &copy; {new Date().getFullYear()}.
          <a href="/" className="text-muted">
            ComplexApp
          </a>
          . All rights reserved.
        </p>
        <h7>Hope you are enjoying {days[new Date().getDay()]}</h7>
      </footer>
    </>
  );
}

export default Footer;
