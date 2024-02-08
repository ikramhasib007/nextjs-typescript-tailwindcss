import { gql } from '@apollo/client'
import {
  CORE_ADDRESS_FIELDS,
  CORE_CATEGORY_FIELDS,
  CORE_COUPON_FIELDS,
  CORE_CUSTOMER_FIELDS,
  CORE_FILE_FIELDS,
  CORE_STATUS_TEXT_FIELDS,
  CORE_PRODUCT_FIELDS,
  CORE_PROFILE_FIELDS,
  CORE_REVIEW_FIELDS,
  CORE_SHOP_FIELDS,
  CORE_TRANSACTION_FIELDS,
  CORE_PAYMENT_FIELDS,
  CORE_VARIANT_FIELDS,
  CORE_TERMS_AND_CONDITION_FIELDS,
  CORE_DELIVERY_FIELDS,
  CORE_SHOPPING_CART_FIELDS,
  CORE_ORDER_ITEM_FIELDS,
  CORE_ORDER_FIELDS,
  CORE_NOTIFICATION_FIELDS,
} from './core'


export const IMAGE_FIELDS = gql`
  ${CORE_FILE_FIELDS}

  fragment ImageFields on File {
    ...CoreFileFields
  }
`

export const ADDRESS_FIELDS = gql`
  ${CORE_ADDRESS_FIELDS}

  fragment AddressFields on Address {
    ...CoreAddressFields
    _count {
      orders
    }
  }
`

export const PROFILE_FIELDS = gql`
  ${CORE_PROFILE_FIELDS}

  fragment ProfileFields on Profile {
    ...CoreProfileFields
  }
`

export const SHOP_OWNER_FIELDS = gql`
  ${IMAGE_FIELDS}

  fragment ShopOwnerFields on User {
    id
    firstName
    lastName
    email(hasReturn: true)
    images {
      ...ImageFields
    }
    profile {
      id
      phone
      designation
    }
  }
`

export const CUSTOMER_FIELDS = gql`
  ${CORE_CUSTOMER_FIELDS}

  fragment CustomerFields on Customer {
    ...CoreCustomerFields
  }
`

export const STATUS_TEXT_FIELDS = gql`
  ${CORE_STATUS_TEXT_FIELDS}

  fragment StatusTextFields on StatusText {
    ...CoreStatusTextFields
  }
`

export const SHOP_FIELDS = gql`
  ${CORE_SHOP_FIELDS}
  ${STATUS_TEXT_FIELDS}
  ${CORE_DELIVERY_FIELDS}
  ${IMAGE_FIELDS}

  fragment ShopFields on Shop {
    ...CoreShopFields
    delivery {
      ...CoreDeliveryFields
    }
    images {
      ...ImageFields
    }
    status {
      ...StatusTextFields
    }
  }
`

export const SHOP_SEARCH_FIELDS = gql`
  ${CORE_SHOP_FIELDS}
  ${SHOP_OWNER_FIELDS}
  ${IMAGE_FIELDS}
  ${STATUS_TEXT_FIELDS}

  fragment ShopSearchFields on Shop {
    ...CoreShopFields
    owner {
      ...ShopOwnerFields
    }
    images {
      ...ImageFields
    }
    status {
      ...StatusTextFields
    }
    _count {
      products
    }
  }
`

export const TERMS_AND_CONDITION_FIELDS = gql`
  ${CORE_TERMS_AND_CONDITION_FIELDS}

  fragment TermsAndConditionFields on TermsAndCondition {
    ...CoreTermsAndConditionFields
  }
`

export const COUPON_FIELDS = gql`
  ${CORE_COUPON_FIELDS}

  fragment CouponFields on Coupon {
    ...CoreCouponFields
  }
`

export const PAYMENT_FIELDS = gql`
  ${CORE_PAYMENT_FIELDS}

  fragment PaymentFields on Payment {
    ...CorePaymentFields
  }
`

export const TRANSACTION_FIELDS = gql`
  ${CORE_TRANSACTION_FIELDS}

  fragment TransactionFields on Transaction {
    ...CoreTransactionFields
  }
`

export const CATEGORY_FIELDS = gql`
  ${CORE_CATEGORY_FIELDS}

  fragment CategoryFields on Category {
    ...CoreCategoryFields
  }
`

export const REVIEW_FIELDS = gql`
  ${CORE_REVIEW_FIELDS}

  fragment ReviewFields on Review {
    ...CoreReviewFields
  }
`

export const VARIANT_FIELDS = gql`
  ${CORE_VARIANT_FIELDS}
  ${IMAGE_FIELDS}

  fragment VariantFields on Variant {
    ...CoreVariantFields
    images {
      ...ImageFields
    }
  }
`

export const PRODUCT_FIELDS = gql`
  ${CORE_PRODUCT_FIELDS}
  ${VARIANT_FIELDS}
  ${IMAGE_FIELDS}
  ${CATEGORY_FIELDS}
  ${REVIEW_FIELDS}

  fragment ProductFields on Product {
    ...CoreProductFields
    shortDescription
    longDescription
    variants {
      ...VariantFields
    }
    images {
      ...ImageFields
    }
    category {
      ...CategoryFields
    }
    reviews {
      ...ReviewFields
    }
    _count {
      reviews
    }
  }
`

export const PRODUCT_INFORMATION_FIELDS = gql`
  ${CORE_PRODUCT_FIELDS}
  ${VARIANT_FIELDS}
  ${IMAGE_FIELDS}

  fragment ProductInformationFields on Product {
    ...CoreProductFields
    images {
      ...ImageFields
    }
    variants {
      ...VariantFields
    }
    _count {
      reviews
    }
  }
`

export const SHOPPING_CART_FIELDS = gql`
  ${CORE_SHOPPING_CART_FIELDS}
  ${CORE_ORDER_ITEM_FIELDS}
  ${CORE_PRODUCT_FIELDS}
  ${VARIANT_FIELDS}
  ${CORE_ADDRESS_FIELDS}
  ${COUPON_FIELDS}
  ${IMAGE_FIELDS}

  fragment ShoppingCartFields on ShoppingCart {
    ...CoreShoppingCartFields
    items {
      ...CoreOrderItemFields
      item {
        ...CoreProductFields
        images {
          ...ImageFields
        }
        shop {
          id
          name
          subdomain
        }
      }
      variant {
        ...VariantFields
      }
      createdAt
    }
    deliveryAddress {
      ...CoreAddressFields
    }
    coupon {
      ...CouponFields
    }
  }
`

export const SIMPLE_ORDER_FIELDS = gql`
  ${STATUS_TEXT_FIELDS}

  fragment SimpleOrderFields on Order {
    id
    uid
    total
    createdAt
    status {
      ...StatusTextFields
    }
  }
`

export const ORDER_FIELDS = gql`
  ${CORE_ORDER_FIELDS}
  ${CORE_ORDER_ITEM_FIELDS}
  ${CUSTOMER_FIELDS}
  ${CORE_ADDRESS_FIELDS}
  ${COUPON_FIELDS}
  ${PAYMENT_FIELDS}
  ${STATUS_TEXT_FIELDS}
  ${IMAGE_FIELDS}
  ${VARIANT_FIELDS}

  fragment OrderFields on Order {
    ...CoreOrderFields
    paymentStatus {
      ...StatusTextFields
    }
    items {
      ...CoreOrderItemFields
      status {
        ...StatusTextFields
      }
      item {
        id
        name
        slug
        shortDescription
        price
        storePrice
        vat
        vatType
        images {
          ...ImageFields
        }
        shop {
          id
          name
          subdomain
        }
      }
      variant {
        ...VariantFields
      }
    }
    customer {
      ...CustomerFields
    }
    deliveryAddress {
      ...CoreAddressFields
    }
    billingAddress {
      ...CoreAddressFields
    }
    coupon {
      ...CouponFields
    }
    payment {
      ...PaymentFields
    }
    status {
      ...StatusTextFields
    }
  }
`

export const NOTIFICATION_FIELDS = gql`
  ${CORE_NOTIFICATION_FIELDS}
  ${CORE_CUSTOMER_FIELDS}

  fragment NotificationFields on Notification {
    ...CoreNotificationFields
    customer {
      ...CoreCustomerFields
    }
  }
`