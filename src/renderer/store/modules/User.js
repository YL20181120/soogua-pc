
import * as user from '../../../api/user'
import { isEmpty } from 'lodash'
import { setToken as httpSetToken } from '../../../utils/http'
import localforage from 'localforage'

const state = {
  user: {},
  token: null
}

const SET_TOKEN = 'Auth//SET_TOKEN'
const SET_USER = 'Auth//SET_USER'

const mutations = {
  [SET_TOKEN] (state, value) {
    state.token = value
  },
  [SET_USER] (state, value) {
    state.user = value
  }
}

const actions = {
  attemptLogin ({ dispatch }, payload) {
    return user
      .postLogin(payload)
      .then(data => {
        dispatch('setToken', data.data.access_token)
        httpSetToken(data.data.access_token)
        localforage.setItem('APP_USER_TOKEN', data.data.access_token)
        return Promise.resolve(data)
      })
      .then(() => dispatch('loadUser'))
  },
  setToken ({ commit }, payload) {
    // prevent if payload is a object
    const token = isEmpty(payload) ? null : payload.token || payload
    // Commit the mutations
    commit(SET_TOKEN, token)
    return Promise.resolve(token) // keep promise chain
  },
  loadUser ({ dispatch }) {
    return user
      .loadUserData()
      // store user's data
      .then(user => dispatch('setUser', user))
  },
  setUser ({ commit }, user) {
    // Commit the mutations
    commit(SET_USER, user)
    return Promise.resolve(user) // keep promise chain
  }
}

const getters = {
  isLogged ({token}) {
    return !isEmpty(token)
  },
  authToken ({token}) {
    return token
  },
  currentUser ({user}) {
    return user
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
