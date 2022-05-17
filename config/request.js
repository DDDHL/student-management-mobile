module.exports = (vm) => {
	uni.$u.http.setConfig((config) => {
		//config.baseURL = 'http://113.78.183.188:9568'; /* 根域名 */
		config.baseURL = 'http://192.168.31.56:8001'; /* 根域名 */
		return config
	})

	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => {
		config.data = config.data || {}
		// 根据custom参数中配置的是否需要token，添加对应的请求头
		if(config?.custom?.auth) {
			config.header.token = uni.getStorageSync('token')
		}
		return config
	}, config => {
		return Promise.reject(config)
	})

	// 响应拦截
	uni.$u.http.interceptors.response.use((response) => {
		const data = response.data
		// 自定义参数
		//console.log(data)
		const custom = response.config?.custom
		if (data.code!=='') {
			// token过期等及未绑定openid
			if(data.code == '10018'||data.code == '1002'||data.code == '1001'){
				return data.code
			}
			// 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
			if (custom.toast !== false) {
				uni.$u.toast(data.message)
			}

			// 如果需要catch返回，则进行reject
			if (custom?.catch) {
				return Promise.reject(data)
			} else {
				// 否则返回一个pending中的promise，请求不会进入catch中
				return new Promise(() => {})
			}
		}
		return data.data === undefined ? {} : data.data
	}, (response) => {
		// 对响应错误做点什么 （statusCode !== 200）
		return Promise.reject(response)
	})
}
