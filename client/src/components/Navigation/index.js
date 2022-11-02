import React from "react";

import Auth from '../../utils/auth';
// TODO need conditional navigation for client/vendor and no nav for login/signup
export default function Navigation() {
  return (
    <nav className="">
      {Auth.loggedIn() ? (
        <>
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
        </>
      ) : (
        <div>

        </div>
      )};
    </nav>
  );
}
