import React from "react";

// allows us to make request to GraphQL server, made available to the app by <ApolloProvider>
import { useQuery } from "@apollo/client";
import { QUERY_VENDORS } from "../utils/queries";

const Vendor = (props) => {
  // user useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_VENDORS);

  const vendors = data?.vendors || [];
  // TODO onClick for <i> magnifying glass
  return (
    <main className="row justify-content-center m-0 mt-2 mb-3">
      <div className="col-12 row justify-content-center align-items-center mb-3">
        <label className="col-3 searchLabel">Search: </label>
        <input className="col-7 searchInput" type="search" id="searchQuery" />
        <i class="col-1 fa-solid fa-magnifying-glass magBtn"></i>
      </div>
      <h2 className="col-11 vendorTitle">Vendor List</h2>
      <ul className="col-11 row justify-content-center px-0 pb-4 vendorItems">
        {vendors.map((vendor) => (
          <li className="col-11 mt-4 listBg" key={vendor.username}>
            <div className="row align-items-end">
              <h3 className="col-12 col-md-6 my-0 text-start shopName">
                {vendor.username}
              </h3>
              <p className="col-12 text-end col-md-6 vendorName noMargin">
                Owned by {vendor.username}
              </p>
            </div>
            <div className="row align-items-end">
              <p className="col-4 col-md-4 clientNumber noMargin">54 clients</p>
              <p className="col-8 col-md-8 text-end createdAt noMargin">
                Community member since created_at
              </p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );

  // return (
  //   <main className="row justify-content-center m-0">
  //     <h2 className="col-11 vendorList">Vendor List</h2>
  //     <ul className="col-11 row justify-content-center px-0 vendorItems">
  //       {vendors.map((vendor) => (
  //         <li className="col-11" key={vendor.username}>
  //           <div className="row align-items-center mx-1">
  //             <h3 className="col-6 text-start vendorName">{vendor.username}</h3>
  //             <p className="col-6 noMargin">by {vendor.username}</p>
  //           </div>
  //           <div className="row align-items-start mx-2">
  //             <p className="col-4">54 clients</p>
  //             <p className="col-8 text-end">
  //               Community member since created_at
  //             </p>
  //           </div>
  //         </li>
  //       ))}
  //     </ul>
  //   </main>
  // );
};
export default Vendor;
