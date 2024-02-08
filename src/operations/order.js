import { gql } from '@apollo/client'
import { ORDER_FIELDS, SIMPLE_ORDER_FIELDS } from './fragments'

export const GET_MY_ORDER_LIST = gql`
  ${SIMPLE_ORDER_FIELDS}

  query GetMyOrderList(
    $query: String
    $skip: Int
    $take: Int
    $cursor: String
  ) {
    # connection has ignore the variables & must send the latest variables for each query
    # filter has differentiate the variables
    myOrderList(query: $query, skip: $skip, take: $take, cursor: $cursor) @connection(key: "orders", filter: ["query"]) {
      orders(query: $query, skip: $skip, take: $take, cursor: $cursor) {
        ...SimpleOrderFields
      }
      hasNextPage
      count
    }
  }
`

export const GET_ORDER = gql`
  ${ORDER_FIELDS}

  query GetOrder($id: ID, $uid: String) {
    order(
      id: $id,
      uid: $uid
    ) {
      ...OrderFields
    }
  }
`

export const CREATE_ORDER = gql`
  ${ORDER_FIELDS}

  mutation CreateOrder($shoppingCartId: ID!, $data: CreateOrderInput ) {
    createOrder(
      shoppingCartId: $shoppingCartId,
      data: $data
    ) {
      ...OrderFields
    }
  }
`

export const UPDATE_ORDER = gql`
  ${ORDER_FIELDS}
  
  mutation UpdateOrder($id: ID!, $data: UpdateOrderInput!) {
    updateOrder(
      id: $id,
      data: $data
    ) {
      ...OrderFields
    }
  }
`

export const DELETE_ORDER = gql`
  ${ORDER_FIELDS}

  mutation DeleteOrder($id: ID!) {
    deleteOrder(
      id: $id
    ) {
      ...OrderFields
    }
  }
`