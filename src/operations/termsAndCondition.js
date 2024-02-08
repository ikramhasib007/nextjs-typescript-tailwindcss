import { gql } from '@apollo/client'
import { TERMS_AND_CONDITION_FIELDS } from './fragments'


export const GET_TERMS_AND_CONDITIONS = gql`
  ${TERMS_AND_CONDITION_FIELDS}

  query GetTermsAndConditions {
    termsAndConditions {
      ...TermsAndConditionFields
    }
  }
`

export const CREATE_TERMS_AND_CONDITION = gql`
  ${TERMS_AND_CONDITION_FIELDS}

  mutation CreateTermsAndCondition($data: TermsAndConditionInput!) {
    createTermsAndCondition(
      data: $data
    ) {
      ...TermsAndConditionFields
    }
  }
`

export const UPDATE_TERMS_AND_CONDITION = gql`
  ${TERMS_AND_CONDITION_FIELDS}
  
  mutation UpdateTermsAndCondition($id: ID!, $data: TermsAndConditionInput!) {
    updateTermsAndCondition(
      id: $id,
      data: $data
    ) {
      ...TermsAndConditionFields
    }
  }
`

export const DELETE_TERMS_AND_CONDITION = gql`
  ${TERMS_AND_CONDITION_FIELDS}

  mutation DeleteTermsAndCondition($id: ID!) {
    deleteTermsAndCondition(
      id: $id
    ) {
      ...TermsAndConditionFields
    }
  }
`