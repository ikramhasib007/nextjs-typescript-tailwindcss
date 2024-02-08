import { gql } from '@apollo/client'
import { CUSTOMER_FIELDS } from './fragments'
import { CORE_CUSTOMER_FIELDS, CORE_OTP_FIELDS } from './fragments/core'

export const GET_CUSTOMERS = gql`
  ${CUSTOMER_FIELDS}

  query GetCustomers {
    customers {
      ...CustomerFields
    }
  }
`

export const CREATE_CUSTOMER = gql`
  ${CUSTOMER_FIELDS}

  mutation CreateCustomer($data: CreateCustomerInput!) {
    createCustomer (
      data: $data
    ) {
      token
      customer {
        ...CustomerFields
      }
    }
  }
`

export const UPDATE_CUSTOMER = gql`
  ${CUSTOMER_FIELDS}

  mutation UpdateCustomer($data: UpdateCustomerInput!) {
    updateCustomer (
      data: $data
    ) {
      ...CustomerFields
    }
  }
`

export const DELETE_CUSTOMER = gql`
  ${CUSTOMER_FIELDS}

  mutation DeleteCustomer {
    deleteCustomer {
      ...CustomerFields
    }
  }
`

export const SUBSCRIBE_CUSTOMER = gql`
  ${CUSTOMER_FIELDS}

  subscription SubscribeCustomer {
    customer {
     mutation
     data {
        ...CustomerFields
      }
    }
  }
`

export const LOGIN_CUSTOMER = gql`
  mutation LoginCustomer ($data: LoginCustomerInput!) {
      loginCustomer (
        data: $data
      ) {
        token
        customer {
          id
        }
      }
    }
`

export const GENERATE_OTP = gql`
  ${CORE_OTP_FIELDS}

  mutation GenerateOtp ($data: OtpLoginCustomerInput!) {
    generateOtp (
      data: $data
    ) {
      ...CoreOtpFields
    }
  }
`

export const OTP_LOGIN_CUSTOMER = gql`
  mutation OtpLoginCustomer ($data: OtpLoginCustomerInput!) {
    otpLoginCustomer (
      data: $data
    ) {
      token
      customer {
        id
      }
    }
  }
`

export const SOCIAL_LOGIN_CUSTOMER = gql`
  mutation SocialLoginCustomer ($data: LoginCustomerInput!) {
      socialLoginCustomer (
        data: $data
      ) {
        token
      }
    }
`

export const GET_CUSTOMER_BY_EMAIL = gql`
  ${CORE_CUSTOMER_FIELDS}

  query GetCustomerByEmail ($email: String!) {
    customerByEmail(email: $email) {
      ...CoreCustomerFields
    }
  }
`

export const RESET_PASSWORD_CUSTOMER = gql`
  mutation ResetPasswordCustomer (
    $id: ID!,
    $token: String!,
    $password: String!)
    {
    resetPasswordCustomer(id: $id, token: $token, data: {
      password: $password
    }) {
      firstName
      lastName
      email
    }
  }
`

export const EMAIL_VERIFY_CUSTOMER = gql`
  mutation EmailVerifyCustomer {
    emailVerifyCustomer {
      firstName
      lastName
    }
  }
`

export const ME = gql`
  ${CUSTOMER_FIELDS}
  
  query ME {
    customer {
      ...CustomerFields
    }
  }
`