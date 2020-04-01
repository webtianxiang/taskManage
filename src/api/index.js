import * as api from './config'
export const getUsersList = (body) => {
  return api.get('/api/users/users', body)
}
export const createUser = (body) => {
  return api.post('/api/user', body)
}
