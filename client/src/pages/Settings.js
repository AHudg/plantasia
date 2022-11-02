import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Auth from "../utils/auth";
import UserInfo from "../components/UserInfo/";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_CLIENTME, QUERY_VENDORME } from "../utils/queries";
import { EDIT_CLIENT, EDIT_VENDOR } from "../utils/mutations";

const Settings = () => {
  const [edit, setEdit] = useState(false);

  const userType = Auth.getProfile().data.type;

  const [formState, setFormState] = useState({
    shopName: "",
    description: "",
    phone: "",
  });

  const { data, loading } = useQuery(
    userType === "Client" ? QUERY_CLIENTME : QUERY_VENDORME
  );

  const [editClient] = useMutation(EDIT_CLIENT);
  const [editVendor] = useMutation(EDIT_VENDOR);

  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  const userData = data?.clientMe || data?.vendorMe || {};

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

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

    if (userType === "Client") {
      try {
        // why do I have to call this data????
        const { data } = await editClient({
          variables: { ...formState },
        });
        setEdit(false);
      } catch (e) {
        console.log(e);
      }
    } else if (userType === "Vendor") {
      try {
        const { data } = await editVendor({
          variables: { ...formState },
        });
        setEdit(false);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleEdit = () => {
    // upon login, edit = false, so only a button appears asking if you'd like to edit
    if (!edit) {
      return <div></div>;
      // when button clicked, edit = true, so the fields populate on the screen
    } else {
      return (
        <form
          className="row justify-content-center text-center mx-0"
          onSubmit={handleSubmit}
        >
          <div className="col-10 my-3 row justify-content-center text-end">
            <label className="col-12 col-sm-3 my-3">Shop Name:</label>
            <input
              className="col-12 col-sm-8 my-3"
              type="text"
              name="shopName"
              id="shopName"
              placeholder={userData.shopName}
              value={formState.shopName}
              onChange={handleChange}
            ></input>
            <label className="col-12 col-sm-3 my-3">Description:</label>
            <input
              className="col-12 col-sm-8 my-3"
              type="text"
              name="description"
              id="description"
              placeholder={userData.description}
              value={formState.description}
              onChange={handleChange}
            ></input>
            <label className="col-12 col-sm-3 my-3">Phone:</label>
            <input
              className="col-12 col-sm-8 my-3"
              type="text"
              name="phone"
              id="phone"
              placeholder={userData.phone}
              value={formState.phone}
              onChange={handleChange}
            ></input>
            <button type="submit" className="col-5 my-4">
              Save
            </button>
          </div>
        </form>
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
