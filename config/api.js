const http = uni.$u.http

// 登录或绑定
export const login = (params) => http.post('/admin/wxLogin', params)

// 验证是否需要绑定
export const checkWx = (params) => http.post('/admin/wxVerify', {
	openId: params
})

// 请假请求
export const vacation = (params, config = {}) => http.post('/leave/apply', params, config)

// 用户页面验证token
export const checkTk = (params, config = {}) => http.post('/admin/verify', params, config)

// 获取openid
export const getOpenId = (params) => http.post('/admin/getOpenId',params)