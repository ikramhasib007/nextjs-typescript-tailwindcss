import { InMemoryCache } from '@apollo/client'
import { searchQueryVar, sessionidVar, shoppingCartVar } from '.'
import { cursorTakePaginatedFieldPolicy } from './utilities'

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        _sessionid: {
          read() { return sessionidVar() }
        },
        _searchQuery: {
          read() { return searchQueryVar() }
        },
        _shoppingCart: {
          read() { return shoppingCartVar() }
        },
        addresses: cursorTakePaginatedFieldPolicy(),
        notifications: cursorTakePaginatedFieldPolicy()
      }
    },

    Shops: {
      fields: {
        shops: {
          keyArgs: ["query"],
          merge: false
        }
      }
    },

    ShopProductList: {
      fields: {
        products: {
          keyArgs: ["query", "shopId"],
          merge: false
        },
        hasNextPage: {
          read(nextPage = false) { // default value
            return nextPage
          }
        },
        count: {
          read(count = 0) {  // default value
            return count;
          }
        }
      }
    },

    ShoppingCart: {
      fields: {
        items: {
          keyArgs: ["sessionid"],
          merge: false
        }
      }
    },

    Order: {
      fields: {
        items: {
          keyArgs: ["query"],
          merge: false
        }
      }
    },

    MyOrderList: {
      fields: {
        orders: {
          keyArgs: ["query"],
          merge: false,
        },
        hasNextPage: {
          read(nextPage = false) { // default value
            return nextPage
          }
        },
        count: {
          read(count = 0) {  // default value
            return count;
          }
        }
      }
    },

    Notification: {
      fields: {
        id(id) { return parseInt(id, 10) }
      }
    },

  }
})