import axios from 'axios'

const concatUrl = function (url) {
    const baseUrl = 'http://khoi-smart-library.herokuapp.com/api'

    return baseUrl.concat(url)
}

const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
}

export function get(url) {
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    axios.defaults.headers.common['baseUrl'] = 'http://khoi-smart-library.herokuapp.com'

    return axios({
        method: 'GET',
        url: concatUrl(url)
    }, config)
}

export function post(url, payload = '') {
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    axios.defaults.headers.common['baseUrl'] = 'http://khoi-smart-library.herokuapp.com'

    return axios({
        method: 'POST',
        url: concatUrl(url),
        data: payload
    }, config)
}
