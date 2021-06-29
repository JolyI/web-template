import Cookies from 'js-cookie'

const state = {
  size: Cookies.get('size') || 'medium'
}

const mutations = {
  SET_SIZE: (state, size) => {
    state.size = size
    Cookies.set('size', size)
  }
}

const actions = {
  setSize ({ commit }, size) {
    commit('SET_SIZE', size)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
