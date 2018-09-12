import { post, get } from '@@/helper/api'

export default function ({ store, redirect }) {
  // If the user is authenticated redirect to home page
  if (store.state.auth.authenticated) {
    if (window.localStorage.getItem('redirect_url') != null) {
      return redirect(window.localStorage.getItem('redirect_url'))
    }

    return redirect('/dashboard')
  }

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
        store.dispatch('auth/logout')
        return redirect('/auth/login')
      })

    if (window.localStorage.getItem('redirect_url') != null
      && window.localStorage.getItem('redirect_url') != '/auth/login'
      && window.localStorage.getItem('redirect_url') != '/auth/register'
    ) {
      return redirect(window.localStorage.getItem('redirect_url'))
    }

    return redirect('/dashboard')
  }
}
