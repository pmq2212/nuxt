/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import * as types from './mutation-types'
import { post ,get } from '@@/helper/api'
// import * as routes from '../../../router/router'

export const check = ({ commit }) => {
    commit(types.CHECK);
};

export const login = ({ commit }, data) => {
    commit('SET_LOADING', true, { root: true })

    return new Promise((resolve, reject) => {
        // Call api login
        post('/login', {email: data.email, password: data.password})
            .then(res => {
                let data = {
                    auth: {
                        access_token: res.data.token[0].access_token
                    },
                    user: {
                        email: res.data.email,
                        name: res.data.userName
                    }
                }

                commit(types.LOGIN, data)
                commit('SET_LOADING', false, { root: true })
                resolve(200) // return http code
            })
            .catch(err => {
                commit('SET_LOADING', false, { root: true });
                reject(err)
            })
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
