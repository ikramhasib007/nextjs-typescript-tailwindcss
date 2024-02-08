import { gql } from "@apollo/client";
import { CUSTOMER_FIELDS, NOTIFICATION_FIELDS, SHOP_FIELDS } from "./fragments";

export const SUBSCRIBE_CUSTOMER = gql`
  ${CUSTOMER_FIELDS}
  ${NOTIFICATION_FIELDS}

  subscription onSubscribeCustomer {
    customer {
      mutation
      data {
        ...CustomerFields
      }
      notifications {
        ...NotificationFields
      }
    }
  }
`

export const SUBSCRIBE_SHOP = gql`
  ${SHOP_FIELDS}
  ${NOTIFICATION_FIELDS}

  subscription onSubscribeShop {
    shop {
      mutation
      data {
        ...ShopFields
      }
      notifications {
        ...NotificationFields
      }
    }
  }
`
