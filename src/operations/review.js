import { gql } from '@apollo/client'
import { REVIEW_FIELDS } from './fragments'


export const GET_REVIEWS = gql`
  ${REVIEW_FIELDS}

  query GetReviews {
    reviews {
      ...ReviewFields
    }
  }
`

export const CREATE_REVIEW = gql`
  ${REVIEW_FIELDS}

  mutation CreateReview($data: ReviewInput!) {
    createReview(
      data: $data
    ) {
      ...ReviewFields
    }
  }
`

export const UPDATE_REVIEW = gql`
  ${REVIEW_FIELDS}
  
  mutation UpdateReview($id: ID!, $data: ReviewInput!) {
    updateReview(
      id: $id,
      data: $data
    ) {
      ...ReviewFields
    }
  }
`

export const REVIEW_ACTION = gql`
  ${REVIEW_FIELDS}
  
  mutation ReviewAction($id: ID!, $data: ReviewActionInput!) {
    reviewAction(
      id: $id,
      data: $data
    ) {
      ...ReviewFields
    }
  }
`

export const DELETE_REVIEW = gql`
  ${REVIEW_FIELDS}

  mutation DeleteReview($id: ID!) {
    deleteReview(
      id: $id
    ) {
      ...ReviewFields
    }
  }
`