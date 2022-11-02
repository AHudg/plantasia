import React from "react";
// TODO need conditional navigation for client/vendor and no nav for login/signup
export default function Navigation() {
  return (
    <nav className="">
      <ul className="row justify-content-around m-0 p-0">
        <li className="col-4">
          <a className="navLink" href="/profile">
            Profile
          </a>
        </li>
        <li className="col-4">
          <a className="navLink" href="/search">
            Dashboard
          </a>
        </li>
        <li className="col-4">
          <a className="navLink" href="/settings">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
}
