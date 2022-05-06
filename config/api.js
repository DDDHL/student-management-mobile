const http = uni.$u.http

// 登录或绑定
export const login = (data) => http.post('/admin/login', data)
