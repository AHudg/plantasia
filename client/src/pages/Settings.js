import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import UserInfo from "../components/UserInfo/";
import { useQuery } from "@apollo/client";
import {
  QUERY_CLIENTME,
  QUERY_VENDORME,
  UPDATE_VENDOR,
  UPDATE_CLIENT,
} from "../utils/queries";

const Settings = () => {
  const [edit, setEdit] = useState(false);

  const { data, loading } = useQuery(
    Auth.getProfile().data.type === "Client" ? QUERY_CLIENTME : QUERY_VENDORME
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  const userData = data?.clientMe || data?.vendorMe || {};

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleEdit = () => {
    // upon login, edit = false, so only a button appears asking if you'd like to edit
    if (!edit) {
      return <div></div>;
      // when button clicked, edit = true, so the fields populate on the screen
    } else {
      return (
        <section className="row justify-content-center text-center mx-0">
          <div className="col-10 my-3 row justify-content-center text-end">
            <label className="col-12 col-sm-3 my-3">Username:</label>
            <input
              className="col-12 col-sm-8 my-3"
              type="text"
              name="username"
              id="username"
            ></input>
            <label className="col-12 col-sm-3 my-3">Shop Name:</label>
            <input
              className="col-12 col-sm-8 my-3"
              type="text"
              name="shopName"
              id="shopName"
            ></input>
            <label className="col-12 col-sm-3 my-3">Description:</label>
            <input
              className="col-12 col-sm-8 my-3"
              type="text"
              name="description"
              id="description"
            ></input>
            <label className="col-12 col-sm-3 my-3">Phone:</label>
            <input
              className="col-12 col-sm-8 my-3"
              type="text"
              name="phone"
              id="phone"
            ></input>
            <label className="col-12 col-sm-3 my-3">Email:</label>
            <input
              className="col-12 col-sm-8 my-3"
              type="text"
              name="email"
              id="email"
            ></input>
            <button type="submit" className="col-5 my-4">
              Save
            </button>
          </div>
        </section>
      );
    }
  };

  return (
    <main className="row m-0">
      <div className="col-12 text-end">
        <p className="">Requests</p>
        <p
          onClick={() => {
            setEdit(!edit);
          }}
        >
          {" "}
          Edit Profile{" "}
        </p>{" "}
        {Auth.loggedIn() ? (
          <p className="" onClick={logout}>
            Logout
          </p>
        ) : (
          <Link to="/"></Link>
        )}
      </div>
      <div>{handleEdit()}</div>
    </main>
  );
};

export default Settings;
