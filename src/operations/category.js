import { gql } from '@apollo/client'
import { CATEGORY_FIELDS } from './fragments'


export const GET_CATEGORIES = gql`
  ${CATEGORY_FIELDS}

  query GetCategories {
    categories {
      ...CategoryFields
    }
  }
`

export const GET_CATEGORY_LIST = gql`
  ${CATEGORY_FIELDS}

  query GetCategoryList {
    categoryList {
      ...CategoryFields
    }
  }
`

export const CREATE_CATEGORY = gql`
  ${CATEGORY_FIELDS}

  mutation CreateCategory($data: CategoryInput!) {
    createCategory(
      data: $data
    ) {
      ...CategoryFields
    }
  }
`

export const UPDATE_CATEGORY = gql`
  ${CATEGORY_FIELDS}
  
  mutation UpdateCategory($id: ID!, $data: CategoryInput!) {
    updateCategory(
      id: $id,
      data: $data
    ) {
      ...CategoryFields
    }
  }
`

export const CATEGORY_ACTION = gql`
  ${CATEGORY_FIELDS}
  
  mutation CategoryAction($id: ID!, $data: CategoryActionInput!) {
    categoryAction(
      id: $id,
      data: $data
    ) {
      ...CategoryFields
    }
  }
`

export const DELETE_CATEGORY = gql`
  ${CATEGORY_FIELDS}

  mutation DeleteCategory($id: ID!) {
    deleteCategory(
      id: $id
    ) {
      ...CategoryFields
    }
  }
`