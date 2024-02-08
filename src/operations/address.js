import { gql } from "@apollo/client";
import { ADDRESS_FIELDS } from "./fragments";


export const GET_ADDRESSES = gql`
  ${ADDRESS_FIELDS}

  query GetAddresses($customerId: ID) {
    addresses(
      customerId: $customerId
    ) {
      ...AddressFields
    }
  }
`

export const CREATE_USER_ADDRESS = gql`
  ${ADDRESS_FIELDS}

  mutation CreateUserAddress($data: AddressInput!) {
    createUserAddress(
      data: $data
    ) {
      ...AddressFields
    }
  }
`

export const UPDATE_USER_ADDRESS = gql`
  ${ADDRESS_FIELDS}

  mutation UpdateUserAddress($id: ID!, $data: AddressInput!) {
    updateUserAddress(
      id: $id,
      data: $data
    ) {
      ...AddressFields
    }
  }
`

export const DELETE_USER_ADDRESS = gql`
  ${ADDRESS_FIELDS}

  mutation DeleteUserAddress($id: ID!) {
    deleteUserAddress(
      id: $id
    ) {
      ...AddressFields
    }
  }
`

export const CREATE_CUSTOMER_ADDRESS = gql`
  ${ADDRESS_FIELDS}

  mutation CreateCustomerAddress($data: AddressInput!) {
    createCustomerAddress(
      data: $data
    ) {
      ...AddressFields
    }
  }
`

export const UPDATE_CUSTOMER_ADDRESS = gql`
  ${ADDRESS_FIELDS}

  mutation UpdateCustomerAddress($id: ID!, $data: AddressInput!) {
    updateCustomerAddress(
      id: $id,
      data: $data
    ) {
      ...AddressFields
    }
  }
`

export const DELETE_CUSTOMER_ADDRESS = gql`
  ${ADDRESS_FIELDS}

  mutation DeleteCustomerAddress($id: ID!) {
    deleteCustomerAddress(
      id: $id
    ) {
      ...AddressFields
    }
  }
`