import React from "react";
// on hover change image
// on click route using state changes
// TODO Change the Footer to populate in Settings
export default function Contact() {
  return (
    <footer className="row justify-content-center align-items-center m-0">
      <div className="col-10 row justify-content-center align-items-center text-center contact">
        <p className="col-4 col-md-2 my-1">Contact Us!</p>
        <img
          className="col-2 col-md-1 my-1 emblem"
          src="./images/whitePhone.png"
        />
        <img className="col-2 col-md-1 emblem" src="./images/whiteEnv.png" />
      </div>
    </footer>
  );
}
