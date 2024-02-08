import { makeVar } from '@apollo/client';
import { uid } from 'uid/secure'

function getSessionId() {
  if (typeof window !== 'undefined') {
    let sessionid = localStorage.getItem('odo-sessionid')
    if (!sessionid) {
      sessionid = uid(16)
      localStorage.setItem('odo-sessionid', sessionid)
    }
    return sessionid
  }
}

export const toasterDefaults = {
  show: false,
  success: false,
  warning: false,
  danger: false,
  message: 'Something went wrong!' // default
}

export const toasterMessages = {
  addToCart: 'Successfully added to cart!',
  outOfStock: 'Out of stock!',
  success: 'Successfully saved!',
  warning: 'Oops! please try again!',
  danger: 'Something went wrong!',
  quantityChanged: "Quantity changed!",
  itemRemoved: "Item removed!",
  itemSelection: "Item selection updated",
  shopAllItemsSelection: "Shop all Items selection updated",
  allItemsSelection: "All Items selection updated",
  couponApplied: 'Successful',
  couponRemoved: 'Remove successful',
}

export const searchQueryVar = makeVar('')
export const shoppingCartVar = makeVar({})
export const deliveryChargeVar = makeVar(0)
export const sessionidVar = makeVar(getSessionId())
export const toasterVar = makeVar(toasterDefaults)