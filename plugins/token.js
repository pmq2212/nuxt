export default function ({ app, store, route }) {
    if (route.path != '/auth/login' && route.path != '/auth/register') {
        window.localStorage.setItem('redirect_url', route.path)
    }
    // app.router.onReady(() => {
        // console.log(store.state.auth)
    // })
  }
