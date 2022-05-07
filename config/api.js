const http = uni.$u.http

// 登录或绑定
export const login = (data) => http.post('/admin/login', data)

// 验证是否需要绑定
export const checkWx = (data) => http.post('/admin/wxVerify',{openId:data})

// 请假请求
export const vacation = (data,config = {})=> http.post('', params, config)