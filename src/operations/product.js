import { gql } from '@apollo/client'
import { PRODUCT_FIELDS, PRODUCT_INFORMATION_FIELDS } from './fragments'

export const GET_SHOP_PRODUCT_LIST = gql`
  ${PRODUCT_INFORMATION_FIELDS}

  query GetShopProductList(
    $shopId: ID!
    $query: String
    $skip: Int
    $take: Int
    $cursor: String
  ) {
    # connection has ignore the variables & must send the latest variables for each query
    # filter has differentiate the variables
    shopProductList(shopId: $shopId, query: $query, skip: $skip, take: $take, cursor: $cursor) @connection(key: "products", filter: ["query"]) {
      products(query: $query, skip: $skip, take: $take, cursor: $cursor) {
        ...ProductInformationFields
      }
      hasNextPage
      count
    }
  }
`

export const GET_SHOP_PRODUCT = gql`
  ${PRODUCT_INFORMATION_FIELDS}

  query GetShopProduct(
    $id: ID,
    $slug: String
  ) {
    shopProduct(id: $id, slug: $slug) {
      ...ProductInformationFields
    }
  }
`

export const GET_SHOP_PRODUCT_DETAILS = gql`
  ${PRODUCT_FIELDS}

  query GetShopProductDetails(
    $id: ID,
    $slug: String
  ) {
    shopProduct(id: $id, slug: $slug) {
      ...ProductFields
    }
  }
`
