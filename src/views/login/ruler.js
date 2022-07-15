export const userRuler =
  [
    { required: true, message: '请填写用户名' },
    { pattern: /^[a-zA-Z0-9]{5,8}$/, message: '用户名格式错误' }
  ]

export const pwdRuler =
  [
    { required: true, message: '请填写密码' },
    { pattern: /^[a-zA-Z0-9]{4,6}$/, message: '密码格式错误' }
  ]
