import React, { useState } from "react";

export default function Login() {
  // TODO form handlers can go here
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <img src="./images/loginBg.png" className="loginImage"></img>
      <h2 className="loginTitle">Log In</h2>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="row justify-content-center m-1 mt-2">
          <div className="col-12 mt-2 row">
            <p className="col-6 text-end">Client</p>
            <p className="col-6">Vendor</p>
          </div>
          <div className="col-12 mb-1 row">
            <label className="col-4 text-end">Email: </label>
            <input
              className="col-8"
              placeholder="email"
              name="email"
              type="email"
              id="email"
              // value, and onChange can be added here
            ></input>
          </div>
          <div className="col-12 my-2 row">
            <label className="col-4 text-end">Password: </label>
            <input
              className="col-8"
              placeholder="password"
              name="password"
              type="password"
              id="password"
              // value, and onChange can be added here
            ></input>
          </div>
          <button className="col-4 my-2" type="submit">
            Submit
          </button>
          <div className="col-11 text-center my-3">
            <p>
              If you don't have an account with us, we'd love to help you
              connect with clients!
            </p>
            <p>
              {" "}
              Click{" "}
              <a className="" href="/signup">
                here
              </a>{" "}
              to sign up now!
            </p>
          </div>
        </div>
      </form>
    </main>
  );
}
