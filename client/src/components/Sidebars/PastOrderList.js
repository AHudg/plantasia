import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../../utils/queries";

export default function PastList() {
  // user useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_ITEMS);

  const items = data?.items || [];

  return (
    <article className="row justify-content-center m-0 mt-2 mb-3">
      <h2 className="col-11 vendorTitle">Recent Orders</h2>
      <ul className="col-11 row justify-content-center px-0 pb-4 vendorItems">
        {items.map((item) => (
          <li className="col-11 mt-4 listBg" key={item.name}>
            <div className="row align-items-end">
              <h3 className="col-6 my-0 text-start shopName">
                Order {item.stock}
              </h3>
              <p className="col-6 text-end clientNumber noMargin">12 items</p>
            </div>
            <div className="row align-items-end">
              <p className="col-8 text-start vendorName noMargin">
                from {item.name}
              </p>
              <p className="col-4 text-end createdAt noMargin">{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
