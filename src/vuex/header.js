export default {
  state: {
    keyWord: ''
  },
  mutations: {
    headerChange (state, keyWord) {
      state.keyWord = keyWord
    }
  },
  actions: {
    headerChange ({commit}, keyWord) {
      commit('headerChange', keyWord)
    }
  }
}
