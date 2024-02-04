import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))

  // Conditional Statements
  // if (request.nextUrl.pathname.startsWith('/about')) {
  //   return NextResponse.rewrite(new URL('/about-2', request.url))
  // }
 
  // if (request.nextUrl.pathname.startsWith('/dashboard')) {
  //   return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  // }
  
  // // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // // Getting cookies from the request using the `RequestCookies` API
  // let cookie = request.cookies.get('nextjs')
  // console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }
  // const allCookies = request.cookies.getAll()
  // console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]
 
  // request.cookies.has('nextjs') // => true
  // request.cookies.delete('nextjs')
  // request.cookies.has('nextjs') // => false
 
  // // Setting cookies on the response using the `ResponseCookies` API
  // const response = NextResponse.next()
  // response.cookies.set('vercel', 'fast')
  // response.cookies.set({
  //   name: 'vercel',
  //   value: 'fast',
  //   path: '/',
  // })
  // cookie = response.cookies.get('vercel')
  // console.log(cookie) // => { name: 'vercel', value: 'fast', Path: '/' }
  // // The outgoing response will have a `Set-Cookie:vercel=fast;path=/` header.
 
  // return response
}
 
// See "Matching Paths" below to learn more
export const config = {
  // matcher: '/about/:path*',
  matcher: '/about/(.*)', // same as above
}

// import { NextRequest } from 'next/server'
// import { isAuthenticated } from '@lib/auth'
 
// // Limit the middleware to paths starting with `/api/`
// export const config = {
//   matcher: '/api/:function*',
// }
 
// export function middleware(request: NextRequest) {
//   // Call our authentication function to check the request
//   if (!isAuthenticated(request)) {
//     // Respond with JSON indicating an error message
//     return Response.json(
//       { success: false, message: 'authentication failed' },
//       { status: 401 }
//     )
//   }
// }