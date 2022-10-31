// allows us to make request to GraphQL server, made available to the app by <ApolloProvider>
import { useQuery } from "@apollo/client";
import { QUERY_CLIENTS } from "../../utils/queries";
import React from "react";

export default function Profile() {
  // user useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_CLIENTS);

  const clients = data?.clients || [];
  console.log(clients);

  return (
    <section className="row justify-content-center text-center mx-0">
      <img
        src="./images/blueProfile.png"
        alt="Placeholder profile image of company logo."
        className="col-10 userImage"
      ></img>
      <div className="col-10 my-3 row">
        <h2 className="col-12 username">TheMiddleAgedWitch</h2>
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
