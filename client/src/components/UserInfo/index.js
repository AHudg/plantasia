import React from "react";

export default function UserInfo(props) {
  const { userData } = props;
  return (
    <section className="row justify-content-center text-center mx-0">
      <img
        src="./images/blueProfile.png"
        alt="Company logo placeholder."
        className="col-10 userImage"
      ></img>
      <div className="col-10 my-3 row">
        <h2 className="col-12 username">{`${userData.username}`}</h2>
        <p className="col-12 description">
          I am a small town ma and pa bed and breakfast. I have a small
          inventory for sale mostly comprised of candles, soaps, and handcrafted
          trinkets.
        </p>
        <p className="col-12 my-1 userContact">Phone: (555) 555-5555</p>
        <p className="col-12 my-0 userContact">
          Email: themiddleagedwitch@gmail.com
        </p>
      </div>
    </section>
  );
}
