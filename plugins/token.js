export default function ({ app, store, route }) {
    window.localStorage.setItem('redirect_url', route.path)
    // app.router.onReady(() => {
        // console.log(store.state.auth)
    // })
  }
