import React from "react";
import { Link } from 'react-router-dom';
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
          <Link to="/" className="mx-1">
            Home
          </Link>{" "}
          |{" "}
          <Link className="mx-1" to="/about-us">
            About Us
          </Link>{" "}
          |{" "}
          <Link className="mx-1" to="/terms">
            Terms
          </Link>
        </p>
        <p className="m-0">
          Copyright &copy; {new Date().getFullYear()}.
          <Link to="/" className="text-muted">
            Sid-App
          </Link>
          . All rights reserved.
        </p>
        <p>Hope you are enjoying {days[new Date().getDay()]}</p>
      </footer>
    </>
  );
}

export default Footer;
