import { cache } from 'react'
import HeroSection from "@/components/HeroSection";
import getClient from "@/lib/client";
import { ME } from "@/operations/customer";

const token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwNjNhMWZmOC01ZTlhLTQ4YTAtYTIxYy05MGY3NmU5YmRiNjgiLCJpYXQiOjE3MDc0MDY3OTksImV4cCI6MTcwOTk5ODc5OX0.DjsX1QUBTWcrrd5pFdhTozaO5_KawlBU8Gs7eVP3ryY"

const getCustomer = cache(async () => {
  let customer = null;
  try {
    const client = getClient(token)
    // customer = (session && (await client.query({query: ME})).data.customer) ?? null 
    customer = (await client.query({query: ME})).data.customer ?? null 
  } catch (error) {
    console.log('error: ', error);
  }
  return customer
})

export default async function Page() {
  const customer = await getCustomer()
  console.log('customer: ', customer);

  return (
    <HeroSection />
  )
}