import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_CLIENT, QUERY_VENDOR } from "../utils/queries";

import UserInfo from "../components/UserInfo";

import Auth from "../utils/auth";

export default function SingleUser() {
  const [match, setMatch] = useState(false);
  console.log(match);

  const { type, username } = useParams();

  const { data, loading } = useQuery(
    type === "client" ? QUERY_CLIENT : QUERY_VENDOR,
    {
      variables: { username: username },
    }
  );

  const account = Auth.getProfile().data.username;

  const userData = data?.client || data?.vendor || {};

  if (userData.friend) {
    const friendData = userData.friend;
    for (let i = 0; i < friendData.length; i++) {
      if (friendData[i].client === account) {
        setMatch(true);
      }
      console.log(friendData[i].client, account);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderInvetory = () => {
    if (type === "vendor") {
      return <div>Vendor Inventoy</div>;
    }
  };

  return (
    <div className="row justify-content-end m-0">
      <p className="col-2 m-3 text-center addFriend" onClick={() => {}}>
        Add Friend
      </p>
      <div className="col-12 mt-5">
        <UserInfo userData={userData}></UserInfo>
        {renderInvetory()}
      </div>
    </div>
  );
}
