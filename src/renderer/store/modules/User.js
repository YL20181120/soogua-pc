
import user from '../../../api/user'
import { isEmpty } from 'lodash'

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
    user
      .postLogin(payload)
      .then(data => {
        dispatch('setToken', data.access_token)
        return Promise.resolve()
      })
    // .then(() => dispatch('loadUser'))
  },
  setToken ({ commit }, payload) {
    // prevent if payload is a object
    const token = isEmpty(payload) ? null : payload.token || payload
    // Commit the mutations
    commit(SET_TOKEN, token)
    return Promise.resolve(token) // keep promise chain
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