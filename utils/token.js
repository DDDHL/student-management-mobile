/** 检测信息是否存在且token是否过期
*	true = 当前账户可用
**/

import {
	checkTk
} from '@/config/api.js';

export const testToken = () => {
	let user = uni.getStorageSync('user')
	let token = uni.getStorageSync('token')
	if(user&&token){
		return new Promise((reslove, reject) => {
			checkTk({}, {
				custom: {
					auth: true,
					toast: false
				}
			}).then(res => {
				if (res == null) {
					console.log('成功')
					reslove(true)
				}else{
					console.log('111')
					uni.removeStorageSync('user')
					uni.removeStorageSync('token')
					uni.removeStorageSync('openId')
					reject('账户信息已过期,请重新登录')
				}
			});
		})
	}
	console.log('222')
	uni.removeStorageSync('user')
	uni.removeStorageSync('token')
	uni.removeStorageSync('openId')
	return Promise.reject('账户信息已过期,请重新登录')
}
