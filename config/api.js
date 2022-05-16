import config from "uview-ui/libs/config/config"

const http = uni.$u.http

// 登录或绑定
export const login = (params) => http.post('/admin/wxLogin', params)

// 验证是否需要绑定
export const checkWx = (params) => http.post('/admin/wxVerify', {
	openId: params
})
// 获取openid
export const getOpenId = (params) => http.post('/admin/getOpenId', params)

// 请假请求
export const vacation = (params, config = {}) => http.post('/leave/apply', params, config)

// 用户页面验证token
export const checkTk = (params, config = {}) => http.post('/admin/verify', params, config)

// 编辑用户信息
export const updateInfo = (params, config = {}) => http.post('/user/edit', params, config)

// 获取用户信息
export const getInfo = (params, config = {}) => http.post('/user/getById', params, config)

// 获取假单申请
export const getVacation = (params,config={}) => http.post('/leave/getAll',params,config)

// 审批假单
export const approval = (params,config={})=> http.post('/leave/approval',params,config)