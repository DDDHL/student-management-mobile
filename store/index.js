import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		hasLogin: false,
	},
	actions: {
		logout(state) {
			state.hasLogin = !state.hasLogin;
			uni.removeStorageSync('user')
			uni.removeStorageSync('token')
			uni.removeStorageSync('openId')
		}
	},
	mutations: {

	}

})

export default store
