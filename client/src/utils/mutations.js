import { gql } from "@apollo/client";

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

// export const LOGIN_VENDOR = gql``;

export const SIGNUP_CLIENT = gql`
mutation ($username: String!, $email: String!, $shopName: String!, $password: String!) {
    addClient(username: $username, email: $email, shopName: $shopName, password: $password) {
      token
    }
  }
`;

export const SIGNUP_VENDOR = gql`
mutation addVendor($username: String!, $email: String!, $shopName: String!, $password: String!) {
    addVendor(username: $username, email: $email, shopName: $shopName, password: $password) {
      token
    }
  }
`;
