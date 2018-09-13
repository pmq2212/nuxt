import { post, get } from '@@/helper/api'

export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.auth.authenticated && window.localStorage.getItem('access_token') != null) {
    //
    store.dispatch('auth/check')

    get('/user')
      .then(res => {
        let user = {
          email: res.data.email,
          name: res.data.name
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
