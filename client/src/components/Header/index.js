import React from "react";
import Navigation from "../Navigation";

export default function Header() {
  return (
    <header className="row align-items-center text-center m-0 header">
      <a className="col-2" href="/">
        <img
          src="./images/logoSmall.png"
          alt="Company Logo. Can be clicked to route to the landing page."
          className="logo"
        ></img>
      </a>
      <div className="col-10">
        <Navigation></Navigation>
      </div>
    </header>
  );
}
