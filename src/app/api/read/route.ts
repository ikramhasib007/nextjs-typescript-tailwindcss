import { type NextRequest } from 'next/server'

// Read cookies from Http request
export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')
}