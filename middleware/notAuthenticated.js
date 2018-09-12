const Cookie = process.browser ? require('js-cookie') : undefined

export default function ({ store, redirect }) {
  // If the user is authenticated redirect to home page
  if (store.state.auth.authenticated) {
    if (window.localStorage.getItem('redirect_url') != null) {
      return redirect(window.localStorage.getItem('redirect_url'))
    }

    return redirect('/dashboard')
  }

  if (!store.state.auth.authenticated && window.localStorage.getItem('access_token') != null) {
    store.dispatch('auth/setUser', 'Day la data sau khi reload')

    if (window.localStorage.getItem('redirect_url') != null
      && window.localStorage.getItem('redirect_url') != '/auth/login'
      && window.localStorage.getItem('redirect_url') != '/auth/register'
    ) {
      return redirect(window.localStorage.getItem('redirect_url'))
    }

    return redirect('/dashboard')
  }
}
