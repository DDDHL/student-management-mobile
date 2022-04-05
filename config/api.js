const http = uni.$u.http

// 登录或绑定
export const login = (params) => http.post('/admin/login', params)
