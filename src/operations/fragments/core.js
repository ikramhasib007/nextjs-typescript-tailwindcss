import { gql } from '@apollo/client'

export const CORE_FILE_FIELDS = gql`
  fragment CoreFileFields on File {
    id
    filename
    path
  }
`

export const CORE_OTP_FIELDS = gql`
  fragment CoreOtpFields on Otp {
    id
    phone
    otp
    deviceInfo
    createdAt
  }
`

export const CORE_CUSTOMER_FIELDS = gql`
  fragment CoreCustomerFields on Customer {
    id
    firstName
    lastName
    email
  }
`

export const CORE_PROFILE_FIELDS = gql`
  fragment CoreProfileFields on Profile {
    id
    phone
    designation
    gender
    dob
    city
    country
    createdAt
    updatedAt
  }
`

export const CORE_DELIVERY_FIELDS = gql`
  fragment CoreDeliveryFields on Delivery {
    id
    uid
    city
    charge
    expressCharge
  }
`

export const CORE_SHOP_FIELDS = gql`
  fragment CoreShopFields on Shop {
    id
    name
    tagline
    subdomain
    about
  }
`

export const CORE_CATEGORY_FIELDS = gql`
  fragment CoreCategoryFields on Category {
    id
    name
    rank
  }
`

export const CORE_PRODUCT_FIELDS = gql`
  fragment CoreProductFields on Product {
    id
    name
    sku
    slug
    type
    price
    vat
    vatType
    inStock
    rank
    isSale
    discountType
    discountValue
    maxDiscountValue
    outOfStock
    emiAvailable
    leadTime
  }
`

export const CORE_VARIANT_FIELDS = gql`
  fragment CoreVariantFields on Variant {
    id
    uid
    name
    color
    storage
    size
    flavor
    weight
    height
    width
    length
    rank
    price
    vat
    vatType
    inStock
    isSale
    discountType
    discountValue
    maxDiscountValue
    outOfStock
    leadTime
  }
`

export const CORE_SHOPPING_CART_FIELDS = gql`
  fragment CoreShoppingCartFields on ShoppingCart {
    id
    sessionid
    paymentMethod
    note
    subTotal
    discount
    couponDiscount
    vat
    deliveryCharge
    total
  }
`

export const CORE_ORDER_ITEM_FIELDS = gql`
  fragment CoreOrderItemFields on OrderItem {
    id
    uid
    quantity
    subTotal
    discount
    vat
    total
    selected
    deliveredAt
  }
`

export const CORE_ORDER_FIELDS = gql`
  fragment CoreOrderFields on Order {
    id
    uid
    paymentMethod
    note
    vat
    deliveryCharge
    subTotal
    discount
    couponDiscount
    total
    createdAt
  }
`

export const CORE_COUPON_FIELDS = gql`
  fragment CoreCouponFields on Coupon {
    id
    coupon
    maxUsage
    type
    discountType
    discountValue
    maxDiscountValue
    startDate
    endDate
  }
`

export const CORE_REVIEW_FIELDS = gql`
  fragment CoreReviewFields on Review {
    id
    rating
    comment
    published
    featured
  }
`

export const CORE_TRANSACTION_FIELDS = gql`
  fragment CoreTransactionFields on Transaction {
    id
    tran_id
    amount
    card_type
    card_brand
    risk_level
    status
  }
`

export const CORE_PAYMENT_FIELDS = gql`
  ${CORE_TRANSACTION_FIELDS}

  fragment CorePaymentFields on Payment {
    id
    paymentMethod
    type
    transaction {
      ...CoreTransactionFields
    }
    createdAt
    updatedAt
  }
`

export const CORE_TERMS_AND_CONDITION_FIELDS = gql`
  fragment CoreTermsAndConditionFields on TermsAndCondition {
    id
    title
    text
  }
`

export const CORE_STATUS_TEXT_FIELDS = gql`
  fragment CoreStatusTextFields on StatusText {
    id
    title
    description
    color
    bgColor
  }
`

export const CORE_ADDRESS_FIELDS = gql`
  fragment CoreAddressFields on Address {
    id
    uid
    name
    mobileNumber
    address
    area
    areaCode
    city
    division
    country
    zipCode
    type
    isDefault
    updatedAt
  }
`

export const CORE_HISTORY_FIELDS = gql`
  fragment CoreHistoryFields on History {
    id
    url
    action
    createdAt
    updatedAt
  }
`

export const CORE_ACCESS_TOKEN_FIELDS = gql`
  fragment CoreAccessTokenFields on Token {
    id
    creatorId
    type
    expireAt
  }
`

export const CORE_NOTIFICATION_FIELDS = gql`
  fragment CoreNotificationFields on Notification {
    id
    content
    notifyType
    read
    createdAt
    updatedAt
  }
`
