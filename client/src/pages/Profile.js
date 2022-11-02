import React, { useState, useEffect } from "react";

import UserInfo from "../components/UserInfo";
import UserList from "../components/List/UserList";
import PastList from "../components/Sidebars/PastOrderList";

import { useQuery } from '@apollo/client';
import { QUERY_CLIENTME, QUERY_VENDORME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    function handleScreenResize() {
      setScreenSize(getScreenSize());
    }
    window.addEventListener("resize", handleScreenResize);

    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  const { data, loading} = useQuery(Auth.getProfile().data.type === 'Client' ? QUERY_CLIENTME : QUERY_VENDORME )

  if (loading) {
    return <div>Loading...</div>
  }

  const userData = data?.clientMe || data?.vendorMe || {};

  if (!userData.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  function getScreenSize() {
    return window.innerWidth;
  }

  const renderAddOns = () => {
    console.log(screenSize);
    if (screenSize > 768) {
      return (
        <div className="row m-0">
          <div className="col-6">
            <UserList></UserList>
          </div>
          <div className="col-6">
            <PastList></PastList>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <span>Vendor List</span>
          <span>Past Orders</span>
        </div>
      );
    }
  };

  return (
    <main>
      <UserInfo userData={userData}></UserInfo>
      {renderAddOns()}
    </main>
  );
};

export default Profile;
