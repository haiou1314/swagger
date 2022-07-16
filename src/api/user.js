import request from '@/utils/request'
import store from '@/store'
export const login = (username, password) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}

export const userinfo = () => {
  return request({
    method: 'GET',
    url: '/user',
    headers: {
      authorization: store.state.user.token
    }
  })
}
