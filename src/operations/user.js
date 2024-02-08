// import { gql } from '@apollo/client'
// import { USER_FIELDS } from './fragments'
// import { CORE_USER_FIELDS } from './fragments/core'

// export const GET_USERS = gql`
//   ${USER_FIELDS}

//   query GetUsers {
//     users {
//       ...UserFields
//     }
//   }
// `

// export const CREATE_USER = gql`
//   ${USER_FIELDS}

//   mutation CreateUser($data: CreateUserInput!) {
//     createUser (
//       data: $data
//     ) {
//       token
//       user {
//         ...UserFields
//       }
//     }
//   }
// `

// export const UPDATE_USER = gql`
//   ${USER_FIELDS}

//   mutation UpdateUser($data: UpdateUserInput!) {
//     updateUser (
//       data: $data
//     ) {
//       ...UserFields
//     }
//   }
// `

// export const DELETE_USER = gql`
//   ${USER_FIELDS}

//   mutation DeleteUser {
//     deleteUser {
//       ...UserFields
//     }
//   }
// `

// export const SUBSCRIBE_USER = gql`
//   ${USER_FIELDS}

//   subscription SubscribeUser {
//     user {
//      mutation
//      data {
//         ...UserFields
//       }
//     }
//   }
// `

// export const LOGIN = gql`
//   ${USER_FIELDS}

//   mutation Login($data: LoginUserInput!) {
//     login (
//       data: $data
//     ) {
//       token
//       user {
//         ...UserFields
//       }
//     }
//   }
// `

// export const SOCIAL_LOGIN = gql`
//   ${USER_FIELDS}

//   mutation SocialLogin($data: LoginUserInput!) {
//     socialLogin (
//       data: $data
//     ) {
//       token
//       user {
//         ...UserFields
//       }
//     }
//   }
// `

// export const GET_USER = gql`
//   ${USER_FIELDS}

//   query GetUser {
//     user {
//       ...UserFields
//     }
//   }
// `

// export const GET_USER_BY_EMAIL = gql`
  // ${CORE_USER_FIELDS}

//   query GetUserByEmail ($email: String!) {
//     userByEmail (
//       email: $email
//     ) {
//       ...CoreUserFields
//     }
//   }
// `

// export const RESET_PASSWORD = gql`
//   mutation RESET_PASSWORD (
//     $id: ID!,
//     $token: String!,
//     $password: String!)
//     {
//     resetPassword(id: $id, token: $token, data: {
//       password: $password
//     }) {
//       name
//       email
//     }
//   }
// `

// export const EMAIL_VERIFY = gql`
//   mutation EMAIL_VERIFY {
//     emailVerify {
//       name
//     }
//   }
// `

// export const ME = gql`
//   ${USER_FIELDS}
  
//   query ME {
//     user {
//       ...UserFields
//     }
//   }
// `