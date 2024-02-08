import { gql } from '@apollo/client'
import { CORE_OTP_FIELDS } from '../fragments/core'

export const GET_SESSION_ID = gql`
  query GetSessionId {
    _sessionid @client
  }
`

export const GET_GENERATED_OTP = gql`
  ${CORE_OTP_FIELDS}

  query GetGeneratedOtp {
    _generatedOtp @client {
      ...CoreOtpFields
    }
  }
`

