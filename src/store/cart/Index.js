const state = () => ({
  cart: {
    restaurantId: '',
    products: []
  }
})

const isNum = n => isNaN(n) ? 0 : n

const getters = {
  getFullCart: (state) => {
    return state.cart
  },
  getFullCartPrice: (state) => {
    return state.cart.products.reduce((a, b) => isNum(a.price) + isNum(b.price), 0)
  },
  getCartItemNumber: (state) => (payload) => {
    return state.cart.products.filter(val => val.id === payload.id).length
  }
}

const mutations = {
  addToCart (state, payload) {
    if (!state.cart.restaurantId) { state.cart.restaurantId = payload.restaurantId }
    state.cart.restaurantId = payload.restaurantId
    state.cart.products.push(payload)
  },
  removeFromCart (state, payload) {
    const index = state.cart.products.findIndex(val => val.id === payload.id)
    const numOfItens = state.cart.products.find(val => val.id === payload.id)
    if (index > -1 && numOfItens !== 1) {
      state.cart.products.splice(index, 1)
    }
  },
  cleanCart (state, payload) {
    state.cart.products = []
  }
}

const actions = {
  addToCart: (context, payload) => {
    context.commit('addToCart', payload)
  },
  removeFromCart: (context, payload) => {
    context.commit('removeFromCart', payload)
  }
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
