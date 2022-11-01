import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_CLIENTS, QUERY_VENDORS } from "../../utils/queries";

export default function UserList() {
  // user useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_CLIENTS);

  const clients = data?.clients || [];

  return (
    <article className="row justify-content-center m-0 mt-2 mb-3">
      <h2 className="col-11 vendorTitle">Vendor List</h2>
      <ul className="col-11 row justify-content-center px-0 pb-4 vendorItems">
        {clients.map((client) => (
          <li className="col-11 mt-4 listBg" key={client.username}>
            <div className="row align-items-end">
              <h3 className="col-12 my-0 text-start shopName">
                {client.username}
              </h3>
              <p className="col-12 text-end vendorName noMargin">
                Owned by {client.username}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
