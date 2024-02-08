import { gql } from '@apollo/client'
import { COUPON_FIELDS } from './fragments'


export const GET_COUPONS = gql`
  ${COUPON_FIELDS}

  query GetCoupons {
    coupons {
      ...CouponFields
    }
  }
`

export const CREATE_COUPON = gql`
  ${COUPON_FIELDS}

  mutation CreateCoupon($data: CouponInput!) {
    createCoupon(
      data: $data
    ) {
      ...CouponFields
    }
  }
`

export const UPDATE_COUPON = gql`
  ${COUPON_FIELDS}
  
  mutation UpdateCoupon($id: ID!, $data: CouponInput!) {
    updateCoupon(
      id: $id,
      data: $data
    ) {
      ...CouponFields
    }
  }
`

export const COUPON_ACTION = gql`
  ${COUPON_FIELDS}
  
  mutation CouponAction($id: ID!, $data: CouponActionInput!) {
    couponAction(
      id: $id,
      data: $data
    ) {
      ...CouponFields
    }
  }
`

export const DELETE_COUPON = gql`
  ${COUPON_FIELDS}

  mutation DeleteCoupon($id: ID!) {
    deleteCoupon(
      id: $id
    ) {
      ...CouponFields
    }
  }
`