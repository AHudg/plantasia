import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { SIGNUP_CLIENT, SIGNUP_VENDOR } from "../utils/mutations";

import Auth from "../utils/auth";

export default function SignUp(props) {
  const { user, setCurrentUser } = props;
 

  const [formState, setFormState] = useState({
    username: "",
    email: "",
    shopName: "",
    password: "",
  });
  const [addClient] = useMutation(SIGNUP_CLIENT);
  const [addVendor] = useMutation(SIGNUP_VENDOR);

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

    if (user === "Client") {
      try {
        // why do I have to call this data????
        const { data } = await addClient({
          variables: { ...formState }
        });

        Auth.login(data.addClient.token);
      } catch (e) {
        console.log(e);
      }

    } else if (user === 'Vendor') {
      try {
        const { data } = await addVendor({
          variables: { ...formState }
        });

        Auth.login(data.addVendor.token);
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
      <h2 className="loginTitle">Sign Up</h2>
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
          <div className="col-12 my-2 row">
            <label className="col-4 text-end">Username: </label>
            <input
              className="col-8"
              placeholder="Username"
              name="username"
              type="username"
              id="username"
              value={formState.username}
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-12 my-2 row">
            <label className="col-4 text-end">Shop Name: </label>
            <input
              className="col-8"
              placeholder="Shop Name"
              name="shopName"
              type="shopName"
              id="shopName"
              value={formState.shopName}
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-12 my-2 row">
            <label className="col-4 text-end">Email: </label>
            <input
              className="col-8"
              placeholder="Email"
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
