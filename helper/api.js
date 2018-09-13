import axios from 'axios'

const concatUrl = function (url) {
    const baseUrl = 'https://khoi-smart-library.herokuapp.com/api'

    return baseUrl.concat(url)
}

const config = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded'
}

export function get(url) {
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    axios.defaults.headers.common['baseUrl'] = 'https://khoi-smart-library.herokuapp.com'

    return axios({
        method: 'GET',
        url: concatUrl(url)
    }, config)
}

export function post(url, payload = '') {
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    axios.defaults.headers.common['baseUrl'] = 'https://khoi-smart-library.herokuapp.com'

    return axios({
        method: 'POST',
        url: concatUrl(url),
        data: payload
    }, config)
}

export function demo() {
    return axios({
        method: 'GET',
        url: 'https://n46sdzn3kg.execute-api.us-east-1.amazonaws.com/v1',
    }, config)
}