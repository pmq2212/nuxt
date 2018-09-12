import { post, get } from '@@/helper/api'

export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.auth.authenticated && window.localStorage.getItem('access_token') != null) {
    get('/user')
      .then(res => {
        let user = {
          email: res.email,
          name: res.name
        }

        store.dispatch('auth/setUser', user)
      })
      .catch(err => {
        console.log(err)
        store.dispatch('auth/logout')
        redirect('/auth/login')
      })
  } else if (!store.state.auth.authenticated && window.localStorage.getItem('access_token') == null) {
    return redirect('/auth/login')
  }
}
