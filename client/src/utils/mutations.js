import { gql } from "@apollo/client";

export const ADD_CLIENT = gql`
mutation AddClient($username: String!, $password: String!, $shopName: String!, $phone: String!, $email: String!, $description: String) {
  addClient(username: $username, password: $password, shopName: $shopName, phone: $phone, email: $email, description: $description) {
    token
    client {
      _id
      username
      shopName
      phone
      description
      email
      friend {
        _id
      }
    }
  }
}`;

export const ADD_VENDOR = gql`
mutation addVendor($username: String!, $password: String!, $shopName: String!, $phone: String!, $email: String!, $description: String) {
  addVendor(username: $username, password: $password, shopName: $shopName, phone: $phone, email: $email, description: $description) {
    token
    vendor {
      _id
      username
      email
      shopName
      description
      phone
      friend {
        _id
      }
      inventory {
        _id
      }
    }
  }
}
`;

export const LOGIN_CLIENT = gql`
  mutation loginClient($email: String!, $password: String!) {
    loginClient(email: $email, password: $password) {
      token
      client {
        _id
        username
      }
    }
  }
`;

export const LOGIN_VENDOR = gql`
  mutation loginVendor($email: String!, $password: String!) {
    loginVendor(email: $email, password: $password) {
      token
      vendor {
        _id
        username
      }
    }
  }
`;

export const EDIT_CLIENT = gql`
  mutation editClient(
    $shopName: String!
    $description: String
    $phone: String
  ) {
    editClient(shopName: $shopName, description: $description, phone: $phone) {
      username
      email
      shopName
      description
      phone
      _id
    }
  }
`;

export const EDIT_VENDOR = gql`
  mutation editVendor(
    $shopName: String!
    $description: String
    $phone: String
  ) {
    editVendor(shopName: $shopName, description: $description, phone: $phone) {
      username
      email
      shopName
      description
      phone
      _id
    }
  }
`;
