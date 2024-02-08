import { gql } from '@apollo/client'

export const typeDefs = gql`
  extend type Query {
    _sessionid: String!
    _searchQuery: String!
    _shoppingCart: ShoppingCart!
    _createOrderPayload: CreateOrderPayload!
    _generatedOtp: Otp!
  }

  type CreateOrderPayload {
    deliveryAddressId: String
    billingAddressId: String
    paymentMethod: String
    note: String
  }

`