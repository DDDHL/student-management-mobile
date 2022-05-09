import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		hasLogin: false,
	},
	actions: {
		logout(state) {
			state.hasLogin = false;
			uni.clearStorage();
		}
	},
	mutations: {

	}

})

export default store
