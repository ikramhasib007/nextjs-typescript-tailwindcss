import { gql } from '@apollo/client'
import { CORE_DELIVERY_FIELDS } from './fragments/core'


export const GET_SHOP_DELIVERIES = gql`
  ${CORE_DELIVERY_FIELDS}

  query GetShopDeliveries($shopIds: [String!]!) {
    shopDelivery(shopIds: $shopIds) {
      id
      delivery {
        ...CoreDeliveryFields
      }
    }
  }
`
