import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import ApolloProvider from './apollo-provider'
import { GoogleTagManager } from '@next/third-parties/google';
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'odo 😀 you continue...',
  description: 'odo 😀 you continue...',
}

export default function RootLayout(props: {
  children: React.ReactNode
}) {
  return (
    <html dir="ltr" lang="en" className="h-full antialiased text-gray-900 scroll-smooth">
      <body className="min-h-screen h-full bg-gray-100 font-open-sans text-base font-normal tracking-normal">
        <NextTopLoader height={2} color='#4f46e5' showSpinner={false} />
        <ApolloProvider>{props.children}</ApolloProvider>
        <GoogleTagManager gtmId="GTM-XYZ" />
      </body>
    </html>
  )
}
