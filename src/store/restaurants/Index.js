import Restaurants from './Restaurants'
const state = () => ({
  dialog: {
    showDialog: false,
    restaurantData: {},
    type: 'shop'
  },
  ...Restaurants
})

const getters = {
  getIcon: (state) => (subjectName) => {
    return subjectName !== '' ? state.icons.filter(icon => icon.name === subjectName)[0] : { icon: 'fas fa-asterisk', color: 'black' }
  },
  getSelectorOptions: (state) => (selectorName) => {
    return state.selectors[selectorName]
  },
  getRestaurants: (state) => {
    return state.restaurants
  },
  getDialog: (state) => {
    return state.dialog
  }
}

const mutations = {
  setDialog (state, payload) {
    state.dialog.showDialog = !state.dialog.showDialog
    state.dialog.restaurantData = payload
  },
  setDialogType (state, payload) {
    state.dialog.type = payload.type
  }
}

const actions = {
  setDialog: (context, payload) => {
    context.commit('setDialog', payload)
  },
  setDialogType: (context, payload) => {
    context.commit('setDialogType', payload)
  }
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
