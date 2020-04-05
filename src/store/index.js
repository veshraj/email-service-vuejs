import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    serverUrl: "http://localhost:8080",
    token: localStorage.getItem('token') || null,
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null
  },
  getters: {
    token(state){
      return state.token;
    },
    currentUser(state) {
      return state.currentUser;
    }
  },
  mutations: {
    token(state, payload) {
      try {
        localStorage.setItem('currentUser', JSON.stringify({name: payload.name, email: payload.email, mobileNumber: payload.mobileNumber}))
        localStorage.setItem("token", payload.token);
        state.currentUser = {name: payload.name, email: payload.email, mobileNumber: payload.mobileNumber};
        state.token = payload.token;
      }
      catch(err) {
        console.log(err);
      }
    },
    removeToken(state) {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("token");
      state.currentUser = null;
      state.token = "";
    }
  },
  actions: {},
  modules: {}
});
