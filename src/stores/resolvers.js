
const resolvers = {
  _createOrderPayload(parent, args, ctx, info) {
    // ******************
    // needs to work here
    // ******************
    let _createOrderPayload = localStorage.getItem('_createOrderPayload')
    if (!_createOrderPayload) {
      _createOrderPayload = {
        deliveryAddressId: null,
        billingAddressId: null,
        paymentMethod: null,
        note: null,
      }
      localStorage.setItem('_createOrderPayload', JSON.stringify(_createOrderPayload))
    }
    return _createOrderPayload
  },

}

export default resolvers