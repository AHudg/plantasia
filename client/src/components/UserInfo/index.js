import React from "react";

// profile renders when props are in {}
export default function UserInfo({ userData }) {
  return (
    <section className="row justify-content-center text-center mx-0">
      <img
        src="./images/blueProfile.png"
        alt="Company logo placeholder."
        className="col-10 col-md-7 col-lg-6 col-xl-3 col-xxl-2 mb-xl-5 userImage"
      ></img>
      <div className="col-10 col-xl-3 text-xl-start mx-xl-3 my-3 row">
        <p className="col-12 shopname">{`${userData.shopName}`}</p>
        <h2 className="col-12 username">{`Owned by ${userData.username}`}</h2>
        <p className="col-12 mt-3 description">{`${userData.description}`}</p>
        <p className="col-12 my-1 userContact">Phone: {`${userData.phone}`}</p>
        <p className="col-12 my-0 mb-xl-5 userContact">
          Email: {`${userData.email}`}
        </p>
      </div>
    </section>
  );
}
