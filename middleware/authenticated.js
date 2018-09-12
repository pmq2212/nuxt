export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.auth.authenticated && window.localStorage.getItem('access_token') != null) {
    store.dispatch('auth/setUser', 'User after refresh')
  } else if (!store.state.auth.authenticated && window.localStorage.getItem('access_token') == null) {
    return redirect('/auth/login')
  }
}
