import React, { useState } from "react";

export default function SingUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <img src="./images/loginBg.png" className="loginImage"></img>
      <h2 className="loginTitle">Sign Up</h2>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="row justify-content-center m-1 mt-2">
          <div className="col-12 mt-2 row">
            <p className="col-6 text-end">Client</p>
            <p className="col-6">Vendor</p>
          </div>
          <div className="col-12 my-2 row">
            <label className="col-4 text-end">First Name: </label>
            <input
              className="col-8"
              placeholder="first"
              name="first"
              type="first"
              id="first"
              // value, and onChange can be added here
            ></input>
          </div>
          <div className="col-12 my-2 row">
            <label className="col-4 text-end">Last Name: </label>
            <input
              className="col-8"
              placeholder="last"
              name="last"
              type="last"
              id="last"
              // value, and onChange can be added here
            ></input>
          </div>
          <div className="col-12 my-2 row">
            <label className="col-4 text-end">Shop Name: </label>
            <input
              className="col-8"
              placeholder="shop"
              name="shop"
              type="shop"
              id="shop"
              // value, and onChange can be added here
            ></input>
          </div>
          <div className="col-12 my-2 row">
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
              If you are already a member of our community, please log in{" "}
              <a className="" href="/login">
                here
              </a>
              .
            </p>
          </div>
        </div>
      </form>
    </main>
  );
}
