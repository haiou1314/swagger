import request from '@/utils/request'

// 请求
export const findAroomList = () => {
  return request({
    method: 'GET',
    url: '/houses',
    params: {
      cityId: 'beijing'
    }
  })
}
