import React, { useState, useEffect } from "react";

import UserInfo from "../components/User Info";
import UserList from "../components/List/UserList";
import PastList from "../components/Sidebars/PastOrderList";

const Profile = (props) => {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  function getScreenSize() {
    return window.innerWidth;
  }

  useEffect(() => {
    function handleScreenResize() {
      setScreenSize(getScreenSize());
    }
    window.addEventListener("resize", handleScreenResize);

    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

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
      <UserInfo></UserInfo>
      {renderAddOns()}
    </main>
  );
};

export default Profile;
