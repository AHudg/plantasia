import React from "react";
// on hover change image
// on click route using state changes
export default function Footer() {
  return (
    <footer className="row justify-content-center align-items-center m-0">
      <div className="col-10 row justify-content-center align-items-center text-center contact">
        <p className="col-4 col-md-4  my-1">Contact Us!</p>
        <img
          className="col-2 col-md-4 my-1 emblem"
          src="./images/whitePhone.png"
        />
        <img className="col-2 col-md-4 emblem" src="./images/whiteEnv.png" />
      </div>
    </footer>
  );
}
