import { gql } from '@apollo/client'
import { VARIANT_FIELDS } from './fragments'


export const UPDATE_VARIANT = gql`
  ${VARIANT_FIELDS}
  
  mutation UpdateVariant($id: ID!, $data: VariantInput!) {
    updateVariant(
      id: $id,
      data: $data
    ) {
      ...VariantFields
    }
  }
`

export const DELETE_VARIANT = gql`
  ${VARIANT_FIELDS}

  mutation DeleteVariant($id: ID!) {
    deleteVariant(
      id: $id
    ) {
      ...VariantFields
    }
  }
`