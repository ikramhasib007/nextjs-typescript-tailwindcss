import { gql } from '@apollo/client'
import { SHOPPING_CART_FIELDS } from './fragments'

export const GET_SHOPPING_CART = gql`
  ${SHOPPING_CART_FIELDS}

  query GetShoppingCart(
    $sessionid: String
  ) {
    shoppingCart(sessionid: $sessionid) {
      ...ShoppingCartFields
    }
  }
`

export const ADD_TO_SHOPPING_CART = gql`
  ${SHOPPING_CART_FIELDS}

  mutation AddToShoppingCart($data: AddToShoppingCartInput!) {
    addToShoppingCart(
      data: $data
    ) {
      ...ShoppingCartFields
    }
  }
`

export const UPDATE_SHOPPING_CART = gql`
  ${SHOPPING_CART_FIELDS}
  
  mutation UpdateShoppingCart($id: ID!, $data: UpdateShoppingCartInput!) {
    updateShoppingCart(
      id: $id,
      data: $data
    ) {
      ...ShoppingCartFields
    }
  }
`

export const ITEM_SELECTION = gql`
  ${SHOPPING_CART_FIELDS}
  
  mutation ItemSelection($id: ID!, $uid: String!) {
    itemSelection(
      id: $id,
      uid: $uid
    ) {
      ...ShoppingCartFields
    }
  }
`

export const REMOVE_ITEM = gql`
  ${SHOPPING_CART_FIELDS}
  
  mutation RemoveItem($id: ID!, $uid: String!) {
    removeItem(
      id: $id,
      uid: $uid
    ) {
      ...ShoppingCartFields
    }
  }
`

export const INCREMENT_ITEM = gql`
  ${SHOPPING_CART_FIELDS}
  
  mutation IncrementItem($id: ID!, $uid: String!) {
    incrementItem(
      id: $id,
      uid: $uid
    ) {
      ...ShoppingCartFields
    }
  }
`

export const DECREMENT_ITEM = gql`
  ${SHOPPING_CART_FIELDS}
  
  mutation DecrementItem($id: ID!, $uid: String!) {
    decrementItem(
      id: $id,
      uid: $uid
    ) {
      ...ShoppingCartFields
    }
  }
`

export const COUPON_APPLY = gql`
  ${SHOPPING_CART_FIELDS}

  mutation CouponApply($id: ID!, $data: ApplyCouponInput!) {
    couponApply(
      id: $id,
      data: $data
    ) {
      ...ShoppingCartFields
    }
  }
`

export const COUPON_REMOVE = gql`
  ${SHOPPING_CART_FIELDS}

  mutation CouponRemove($id: ID!) {
    couponRemove(
      id: $id
    ) {
      ...ShoppingCartFields
    }
  }
`

export const DELETE_SHOPPING_CART = gql`
  ${SHOPPING_CART_FIELDS}

  mutation DeleteShoppingCart($id: ID!) {
    deleteShoppingCart(
      id: $id
    ) {
      ...ShoppingCartFields
    }
  }
`