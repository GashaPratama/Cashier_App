export const state = () => ({
  items: [],
  additionals: [
    {
      title: 'tax',
      mode: 'percentage',
      value: 10,
    },
    {
      title: 'lain-Lain',
      mode: 'fix',
      value: 5000,
    },
  ],
})

export const getters = {
  cartItems: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      let product = rootState.products.products.find(
        (product) => product.id === id
      )
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity,
      }
    })
  },

  itemTotal: () => (price, quantity) => {
    return price * quantity
  },

  subTotal: (state, getters) => {
    return getters.cartItems.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
  },
  calculatePercentage: (state, getters) => (value) => {
    return (getters.subTotal * value) / 100
  },
  // sumAdditionals: (state, getters) => {
  //   console.log(state)
  //   if (state.additionals.length) {
  //     return state.additionals.reduce((total, item) => {
  //       if (item.mode === 'percentage') {
  //         return total + getters.calculatePercentage(value, item)
  //       }
  //       return total + item.value
  //     }, 0)
  //   }
  // },
  // total: (state, getters) => {
  //   return getters.subTotal + getters.sumAdditionals
  // },
}

export const mutations = {
  addItem(state, id) {
    state.items.push({
      id: id,
      quantity: 1,
    })
  },

  incrementItems(state, id) {
    state.items.find((item) => item.id == id).quantity++
  },
  decrementItems(state, id) {
    let item = state.items.find((item) => item.id == id)
    if (item.quantity > 1) {
      item.quantity--
    }
  },

  removeItem(state, id) {
    let index = state.items.findIndex((item) => item.id === id)
    // console.log(index, state.items)
    state.items.splice(index, 1)
  },
}

export const actions = {
  addToCart({ commit, state }, id) {
    const found = state.items.find((item) => item.id === id)
    if (found) {
      commit('incrementItems', id)
    } else {
      commit('addItem', id)
    }
  },

  increment({ commit }, id) {
    commit('incrementItems', id)
  },
  decrement({ commit }, id) {
    commit('decrementItems', id)
  },
  remove({ commit }, id) {
    commit('removeItem', id)
  },
}
