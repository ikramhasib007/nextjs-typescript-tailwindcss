import { gql } from '@apollo/client'

export const GET_CREATE_ORDER_PAYLOAD = gql`
  query GetCreateOrderPayload {
    _createOrderPayload @client {
      deliveryAddressId
      billingAddressId
      paymentMethod
      note
    }
  }
`
