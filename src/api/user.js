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

// 我的收藏
export const userCollection = () => {
  return request({
    method: 'GET',
    url: '/user/favorites',
    headers: {
      authorization: store.state.user.token
    }
  })
}

// 我的出租
export const userlease = () => {
  return request({
    method: 'GET',
    url: '/user/houses',
    headers: {
      authorization: store.state.user.token
    }
  })
}
