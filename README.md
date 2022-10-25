# The Middle Man

## Project Summary

The Middle Man is a single-page REACT application that strengthens the communication between the service industry and wholesale vendors. The application is intended to hold a plethora of vendors that potential clients can search through, select suppliers, and order products. The application would be marketed to the vendors, having vendor profiles that allow them to manage their inventory and client base.

In theory it works like this:

    - Vendor purchases a subscription to our application
    - Vendor creates online store and stocks database with inventory and prices
    - Potential clients navigate to the application and can search the database of available vendors subscribed
    - Client creates account
    - Client request's vendor on the vendors online store
    - If approved by vendor, client gets the vendor added to their supplier list
    - From the supplier list, clients can access vendor stores and place an order/recurring order
    - When ordering, client can see vendor prices and price breaks

Along with hosting the transactions between vendor/client, The Middle Man strives to help your business out by providing trends to the respective parties showing sales, price changes, etc.
​

## Developers

- Andrew Hudgins
  ​
- Morgan Holcomb
  ​ ​

## Installation Instructions

- Clone the repository
- Run _npm i_ in the root directory
- Run _npm start:dev_ to concurrently launch the client and server
  ​
  <br><br>
  The application is also installable from the browser at the [live site]().

## Pictures of App

​

## Tech Stack

- MERN Stack
  ​- Mongoose
- GraphQl
- Concurrently (dev only)
- Bootstrap ​

## APIs

​

## MVP (Minimum Viable Product)

This application is intended to meet the PWA requirements At launch, it will ask whether the user is a client or a vendor. Either way, they are then prompted to log in. After logging in

    Clients will be able to:
    - create their account
    - accept/deny vendor request
    - see all their vendors
    - navigate the vendors inventory (prices and stock)
    - see their current order for that vendor
    - alter current order prior to submitting
    - submit an order- subsequently alter the vendor stock
    - add/delete vendors (the client has a specific key to link to the vendors? how do we make this work w/ associations?)

    Vendors will be able to:
    - create their account (this is where the association comes in- does the client hold the specific key or the vendor?)
    - see all their clients
    - navigate their own inventory (alter prices and stock)
    - see current orders placed for clients
    - add/delete client

## Stretch Goals

Upon completion of the MVP, these are the goals we hope to obtain:

    - client/vendor can see past history (local? cookies? database?)
    - client can set recurring monthly orders (vendor could see these)
    - clients can see trends of vendor prices
    - vendors can give price breaks for bulk purchase
    - vendors can see trends of purchases across all clients
    - vendors can see trends of specific clients???
    - use stripe for yearly subscription to this application

## Development Thoughts?

Contemplating if/how these things could work:

    - can we make incorporate a way to open an excel sheet and use the delimiter to quick import data for vendor inventory??? if this works we can have the client throw in purchases to subtract form the client's inventory since in theory we have that from their purchases. then we could trend the client sales as well and they could see if they use a vendor more frequently (helps in deciding to cut vendors/products)
    - how does the vendor add their products and such??
