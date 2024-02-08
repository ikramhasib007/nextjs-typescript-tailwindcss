import { gql } from '@apollo/client'
import { CUSTOMER_FIELDS, SHOP_FIELDS } from './fragments'
import { CORE_NOTIFICATION_FIELDS } from './fragments/core'

export const GET_NOTIFICATIONS = gql`
  ${CUSTOMER_FIELDS}
  ${SHOP_FIELDS}
  ${CORE_NOTIFICATION_FIELDS}

  query GetNotifications (
    $skip: Int, $take: Int, $cursor: String
  ) {
    notifications (skip: $skip, take: $take, cursor: $cursor) {
      ...CoreNotificationFields
      customer {
        ...CustomerFields
      }
      shop {
        ...ShopFields
      }
    }
  }
`

export const READ_NOTIFICATION = gql`
  mutation ReadNotification($ids: [Int]) {
    notificationRead(ids: $ids)
  }
`