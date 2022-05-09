/** 检测信息是否存在且token是否过期
*	true = 当前账户可用
**/

import {
	checkTk
} from '@/config/api.js';
import store from '@/store';

export const testToken = () => {
	let user = uni.getStorageSync('user')
	let token = uni.getStorageSync('token')
	let openId = uni.getStorageSync('openId')
	if(user&&token&&openId){
		return new Promise((reslove, reject) => {
			checkTk({}, {
				custom: {
					auth: true,
					toast: false
				}
			}).then(res => {
				if (res == null) {
					reslove(true)
				}else{
					store.dispatch('logout')
					reject('账户信息已过期,请重新登录')
				}
			});
		})
	}
	store.dispatch('logout')
	return Promise.reject('账户信息已过期,请重新登录')
}
