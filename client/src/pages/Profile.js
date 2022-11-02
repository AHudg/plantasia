import React from "react";

import UserInfo from "../components/UserInfo";
import UserList from "../components/List/UserList";
import PastList from "../components/Sidebars/PastOrderList";

import { useQuery } from "@apollo/client";
import { QUERY_CLIENTME, QUERY_VENDORME } from "../utils/queries";
import Auth from "../utils/auth";

const Profile = () => {
  console.log(Auth.getProfile().data.type)
  const { data, loading } = useQuery(
    Auth.getProfile().data.type === "Client" ? QUERY_CLIENTME : QUERY_VENDORME
  );
  console.log(data);
  if (loading) {
    return <div>Loading...</div>;
  }

  const userData = data?.clientMe || data?.vendorMe || {};
  console.log(userData)
  return (
    <main>
      <UserInfo userData={userData}></UserInfo>
      <div className="row m-0">
        <div className="col-12 col-md-6">
          <UserList></UserList>
        </div>
        <div className="col-12 col-md-6">
          <PastList></PastList>
        </div>
      </div>
    </main>
  );
};

export default Profile;
