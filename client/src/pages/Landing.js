import React from "react";

function Landing() {
  return (
    <main className="row justify-content-center m-0">
      <img src="./images/landing.png" className="landingImage"></img>
      <p className="col-9 text-center landingText">
        Join our online community of wholesale vendors and clients.
      </p>
      <p className="col-12 text-center landingLink">
        <a href="/login" className="navLink">
          Log in
        </a>{" "}
        or{" "}
        <a href="/signup" className="navLink">
          Sign Up
        </a>
      </p>
    </main>
  );
}

export default Landing;
