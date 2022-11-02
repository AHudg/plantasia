import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_CLIENT, LOGIN_VENDOR } from "../utils/mutations";

import Auth from "../utils/auth";

export default function Login() {
  const [user, setCurrentUser] = useState("Client");

  const [formState, setFormState] = useState({
  username: "",
  password: "",
 });

  const [loginClient] = useMutation(LOGIN_CLIENT);
  const [loginVendor] = useMutation(LOGIN_VENDOR);

  const handleChange = (event) => {
    const { name, value } = event.target;

    // does this take the formState using "..." as the rest operator and replace [name]: original w/ [name]: value because [name] matches?
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user === 'Client') {
      try {
        const { data } = await loginClient({
          variables: { ...formState }
        });

        Auth.login(data.loginClient.token);
      } catch (e) {
        console.log(e);
      }
    } else if (user === 'Vendor') {
      try {
        const { data } = await loginVendor({
          variables: { ...formState }
        });
        Auth.login(data.loginVendor.token);
      } catch (e) {
        console.log(e);
      }
    }
  };
  
  return (
    <main>
      <img
        src="./images/loginBg.png"
        alt="Orange and blue ribbons for aesthetic background."
        className="loginImage"
      ></img>
      <h2 className="loginTitle">Log In</h2>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="row justify-content-center m-1 mt-2">
          <div className="col-12 mt-2 row justify-content-center">
            <p
              className={
                user === "Client"
                  ? "col-3 text-center activeClient"
                  : "col-3 text-center"
              }
              onClick={() => {
                setCurrentUser("Client");
              }}
            >
              Client
            </p>
            <p
              className={
                user === "Vendor"
                  ? "col-3 text-center activeVendor"
                  : "col-3 text-center"
              }
              onClick={() => {
                setCurrentUser("Vendor");
              }}
            >
              Vendor
            </p>
          </div>
          <div className="col-12 mb-1 row">
            <label className="col-4 text-end">Email: </label>
            <input
              className="col-8"
              placeholder="email"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
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
              value={formState.password}
              onChange={handleChange}
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
