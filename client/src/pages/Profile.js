import React, { useState, useEffect } from "react";

import UserInfo from "../components/UserInfo";
import UserList from "../components/List/UserList";
import PastList from "../components/Sidebars/PastOrderList";

import { useQuery } from '@apollo/client';
import { QUERY_CLIENTME } from '../utils/queries';

const Profile = ({ user }) => {
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

  const { data, loading} = useQuery(QUERY_CLIENTME)

  if (loading) {
    return <div>Loadin...</div>
  }

  const userData = data?.clientMe || {};
  console.log(data)

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
