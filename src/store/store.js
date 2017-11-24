import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    category: '',
    question: '',
    answererInfo: {} 
  },
  mutations: {
    setCategory: function(state, payload){
      state.category = payload
    },
    setQuestion: function(state, payload){
      state.question = payload
    },
    setAnswererInfo: function (state, payload) {
      state.answererInfo = payload
    }
  }
})