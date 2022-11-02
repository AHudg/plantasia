import React from "react";

// profile renders when props are in {}
export default function UserInfo({ userData }) {
  return (
    <section className="row justify-content-center text-center mx-0">
      <img
        src="./images/blueProfile.png"
        alt="Placeholder profile image of company logo."
        className="col-10 userImage"
      ></img>
      <div className="col-10 my-3 row">
        <h2 className="col-12 username">{`${userData.username}`}</h2>
        <p className="col-12 description">
        {`${userData.description}`}
        </p>
        <p className="col-12 my-1 userContact">Phone: {`${userData.phone}`}</p>
        <p className="col-12 my-0 userContact">
          Email: {`${userData.email}`}
        </p>
      </div>
    </section>
  );
}
