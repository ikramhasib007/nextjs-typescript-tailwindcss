import { gql } from "@apollo/client";
import { CUSTOMER_FIELDS, IMAGE_FIELDS, PROFILE_FIELDS } from "./fragments";

export const GET_CUSTOMER_PROFILE = gql`
  ${CUSTOMER_FIELDS}
  ${PROFILE_FIELDS}
  ${IMAGE_FIELDS}
  
  query GetCustomerProfile {
    customer {
      ...CustomerFields
      images {
        ...ImageFields
      }
      profile {
        ...ProfileFields
      }
    }
  }
`

export const CREATE_CUSTOMER_PROFILE = gql`
  ${PROFILE_FIELDS}

  mutation CreateCustomerProfile($data: ProfileInput!) {
    createCustomerProfile(
      data: $data
    ) {
      ...ProfileFields
    }
  }
`

export const UPDATE_CUSTOMER_PROFILE = gql`
  ${PROFILE_FIELDS}

  mutation UpdateCustomerProfile($id: ID!, $data: ProfileInput!) {
    updateCustomerProfile(
      id: $id,
      data: $data
    ) {
      ...ProfileFields
    }
  }
`