
import * as user from '../../../api/user'
import { isEmpty } from 'lodash'
import { setToken as httpSetToken } from '../../../utils/http'
import localforage from 'localforage'

const state = {
  user: {},
  token: null,
  showUserInfo: false,
  friends: [],
  applies: []
}

const SET_TOKEN = 'Auth//SET_TOKEN'
const SET_USER = 'Auth//SET_USER'
const SET_SHOW_USER_INFO = 'User//SET_SHOW_USER_INFO'
const SET_FRIENDS = 'User//SET_FRIENDS'
const SET_APPLIES = 'User//SET_APPLIES'

const mutations = {
  [SET_TOKEN] (state, value) {
    state.token = value
  },
  [SET_USER] (state, value) {
    state.user = value
  },
  [SET_SHOW_USER_INFO] (state) {
    state.showUserInfo = !state.showUserInfo
  },
  [SET_FRIENDS] (state, value) {
    state.friends = value
  },
  [SET_APPLIES] (state, value) {
    state.applies = value
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
  },
  checkUserToken ({ dispatch, state }) {
    // If the token exists then all validation has already been done
    if (!isEmpty(state.token)) {
      httpSetToken(state.token)
      return Promise.resolve(state.token)
    }

    /**
     * Token does not exist yet
     * - Recover it from localstorage
     * - Recover also the user, validating the token also
     */
    return (
      localforage
        .getItem('APP_USER_TOKEN')
        .then(token => {
          if (isEmpty(token)) {
            // Token is not saved in localstorage
            return Promise.reject(new Error('NO_TOKEN')) // Reject promise
          }
          httpSetToken(token)
          // Put the token in the vuex store
          return dispatch('setToken', token) // keep promise chain
        })
        // With the token in hand, retrieves the user's data, validating the token
        .then(() => dispatch('loadUser'))
    )
  },
  logout ({ dispatch }) {
    return user.postLogout().then(() => {
      return localforage
        .removeItem('APP_USER_TOKEN')
        .then(dispatch('setToken', null))
        .then(dispatch('setUser', {}))
    })
  },
  toggleShowUserInfo ({ commit }) {
    commit(SET_SHOW_USER_INFO)
  },
  async fetchFriends ({ commit }) {
    await user.getUserFriends()
      .then(data => {
        commit(SET_FRIENDS, data.data.friends)
      })
  },
  async fetchApplies ({ commit }) {
    await user.getUserApplies()
      .then(data => {
        commit(SET_APPLIES, data.data.applies)
      })
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
  },
  showUserInfo ({showUserInfo}) {
    return showUserInfo
  },
  userFriends ({friends}) {
    return friends
  },
  applies ({applies}) {
    return applies
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
