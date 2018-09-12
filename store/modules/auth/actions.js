/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import * as types from './mutation-types'
// import * as routes from '../../../router/router'

export const check = ({ commit }) => {
    commit(types.CHECK);
};

export const login = ({ commit }, data) => {
    commit('SET_LOADING', true, { root: true })

    return new Promise((resolve, reject) => {
        // Fake data login
        const auth = {
            auth: {
                access_token: 'demo',
            },
            user: data.email
        }

        // Call api after

        commit(types.LOGIN, auth)
        commit('SET_LOADING', false, { root: true })
        resolve(200) // return http code
    })
};

export const logout = ({ commit }) => {
    commit('SET_LOADING', false, { root: true })

    return new Promise((resolve, reject) => {
        // Call mutation set state is unauthenticate
        commit(types.LOGOUT)
        resolve(200)
    })
};

export const setUser = ({ commit }, user) => {
    commit(types.SET_USER, user);
};

export default {
    check,
    login,
    logout,
    setUser,
};
