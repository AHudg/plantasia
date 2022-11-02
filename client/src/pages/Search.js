import React from "react";
import { useNavigate } from "react-router-dom";

// allows us to make request to GraphQL server, made available to the app by <ApolloProvider>
import { useQuery } from "@apollo/client";
import { QUERY_CLIENTS, QUERY_VENDORS } from "../utils/queries";

import Auth from "../utils/auth";

const Search = () => {
  // user useQuery hook to make query request
  const navigate = useNavigate();

  const { data, loading } = useQuery(
    Auth.getProfile().data.type === "Client" ? QUERY_VENDORS : QUERY_CLIENTS
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  const userData = data?.clients || data?.vendors || {};

  if (!userData) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  // Creates logic for the opposite user type of the current user
  const userType = () => {
    return Auth.getProfile().data.type === "Client" ? "Vendor" : "Client";
  };

  // set url to /vendor/:username OR /client/:username
  const navigateUser = (e) => {
    navigate(`/user/${userType().toLowerCase()}/${e.target.innerHTML}`);
  };

  // TODO onClick for <i> magnifying glass
  return (
    <main className="row justify-content-center m-0 mt-2 mb-3">
      <div className="col-12 row justify-content-center align-items-center mb-3">
        <label className="col-3 searchLabel">Search: </label>
        <input className="col-7 searchInput" type="search" id="searchQuery" />
        <i className="col-1 fa-solid fa-magnifying-glass magBtn"></i>
      </div>
      <h2 className="col-11 vendorTitle">{userType()} List</h2>
      <ul className="col-11 row justify-content-center px-0 pb-4 vendorItems">
        {userData.map((user) => (
          <li className="col-11 mt-4 listBg" key={user.username}>
            <div className="row align-items-end">
              <h3
                className="col-12 col-md-6 text-start shopName"
                onClick={navigateUser}
              >
                {user.username}
              </h3>
              {/* <p className="col-3 noMargin">Add Friend</p> */}
              {/* Add client count here if possible */}
              <p className="col-12 text-end col-md-6 vendorName noMargin">
                Owned by {user.username}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Search;
