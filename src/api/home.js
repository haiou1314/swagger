import request from '@/utils/request'

// 请求图片
export const homeImg = () => {
  return request({
    method: 'GET',
    url: '/home/swiper'
  })
}

export const homegroups = () => {
  return request({
    method: 'GET',
    url: '/home/groups'
  })
}
