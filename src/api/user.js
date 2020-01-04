// plugins is a alias. see client/build/webpack.base.conf.js
// import http client
import http from '../utils/http'

// send login data and retrive a new token
export const postLogin = ({ username, password }) => {
  return http.post('api/v1/auth/login', {
    grant_type: 'password',
    client_id: '2',
    client_secret: 'k4gmnQBys0lG2qhGnWLGoAF4i1g0oHeIzVc5l2pf',
    username: username,
    password: password,
    scope: '*'
  })
}

export const loadUserData = () => http.get('api/v1/auth/me').catch(() => {})
