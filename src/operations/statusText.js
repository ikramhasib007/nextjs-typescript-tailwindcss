import { gql } from "@apollo/client";
import { STATUS_TEXT_FIELDS } from "./fragments";

export const GET_STATUS_TEXTS = gql`
  ${STATUS_TEXT_FIELDS}

  query GetStatusTexts {
    statusTexts {
      ...StatusTextFields
    }
  }
`

export const UPDATE_STATUS_TEXT = gql`
  ${STATUS_TEXT_FIELDS}

  mutation UpdateStatusText($id: ID!, $data: StatusTextInput!) {
    updateStatusText(
      id: $id,
      data: $data
    ) {
      ...StatusTextFields
    }
  }
`

export const DELETE_STATUS_TEXT = gql`
  ${STATUS_TEXT_FIELDS}

  mutation DeleteStatusText($id: ID!) {
    deleteStatusText(
      id: $id
    ) {
      ...StatusTextFields
    }
  }
`
