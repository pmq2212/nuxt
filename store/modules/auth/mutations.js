import {
    CHECK,
    LOGIN,
    LOGOUT,
    SET_USER,
} from './mutation-types'

import axios from 'axios'

export default {
    [CHECK](state) {
        // Check user is login
        state.authenticated = !!localStorage.getItem('access_token')
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
    },

    [LOGIN](state, data) {
        // Get token for authentication here
        const token = data.auth.access_token

        // Set state user is login
        state.authenticated = true
        state.user = data.user

        // Set localstorage
        localStorage.setItem('access_token', token)

        // Set token common for call api
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },

    [LOGOUT](state) {
        state.authenticated = false
        state.user = ''
        localStorage.removeItem('access_token')
        axios.defaults.headers.common['Authorization']
    },

    [SET_USER](state, user) {
        state.user = user
        state.authenticated = true
    },
};
