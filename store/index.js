import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'

Vue.use(Vuex)

const createStore = () => {
	return new Vuex.Store({
		// Assign the modules to the store
		modules: {
			auth
		},
		// #root state
		state: {
			loading: false,
		},
		// #root mutations
		mutations: {
			SET_LOADING(state, loading) {
				state.loading = loading
			},
		}
		// If strict mode should be enabled
		// strict: debug,
	})
}

export default createStore
