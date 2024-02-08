import { gql } from '@apollo/client'
import { SHOP_FIELDS, SHOP_SEARCH_FIELDS } from './fragments'

export const GET_SHOPS = gql`
  ${SHOP_SEARCH_FIELDS}

  query GetShops(
    $query: String
    $skip: Int
    $take: Int
    $cursor: String
    $orderBy: String
  ) {
    # connection has ignore the variables & must send the latest variables for each query
    # filter has differentiate the variables
    shops(query: $query, skip: $skip, take: $take, cursor: $cursor, orderBy: $orderBy) {
      shops(query: $query, skip: $skip, take: $take, cursor: $cursor) {
        ...ShopSearchFields
      }
      hasNextPage
      count
    }
  }
`


export const GET_ALL_SHOP = gql`
  ${SHOP_FIELDS}

  query GetAllShop {
    allShop {
      ...ShopFields
    }
  }
`

export const GET_SHOP = gql`
  ${SHOP_FIELDS}

  query GetShop(
    $id: ID
    $subdomain: String
  ) {
    shop(id: $id, subdomain: $subdomain) {
      ...ShopFields
    }
  }
`

export const CREATE_SHOP = gql`
  ${SHOP_FIELDS}

  mutation CreateShop($data: ShopInput!) {
    createShop(
      data: $data
    ) {
      ...ShopFields
    }
  }
`

export const UPDATE_SHOP = gql`
  ${SHOP_FIELDS}
  
  mutation UpdateShop($id: ID!, $data: ShopInput!) {
    updateShop(
      id: $id,
      data: $data
    ) {
      ...ShopFields
    }
  }
`

export const SHOP_ACTION = gql`
  ${SHOP_FIELDS}
  
  mutation ShopAction($id: ID!, $data: ShopActionInput!) {
    shopAction(
      id: $id,
      data: $data
    ) {
      ...ShopFields
    }
  }
`

export const DELETE_SHOP = gql`
  ${SHOP_FIELDS}

  mutation DeleteShop($id: ID!) {
    deleteShop(
      id: $id
    ) {
      ...ShopFields
    }
  }
`