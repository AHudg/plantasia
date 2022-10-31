import React, { useState, useEffect } from "react";

import UserInfo from "../components/User Info";
import UserList from "../components/List/UserList";

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
        <div>
          <UserList></UserList>
          <p>The actual past orders</p>
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
