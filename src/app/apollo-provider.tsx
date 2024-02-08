"use client";

import getClient from '@/lib/client';
import * as Apollo from '@apollo/client';

type ApolloProviderProps = {
  children: React.ReactNode;
  token?: string;
}

export default function ApolloProvider({
  children, token
}: ApolloProviderProps) {
  const client = getClient(token)

  return (
    <Apollo.ApolloProvider client={client}>
      {children}
    </Apollo.ApolloProvider>
  )
}