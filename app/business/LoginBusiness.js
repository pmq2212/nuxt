import { mapState, mapActions } from 'vuex'
import * as LoginApi from '@@/app/api/login/LoginApi'

export default {
    middleware: 'notAuthenticated',
    layout: 'default', // Setting this component will load to Default layout
    data () {
        return {
            user: {
                email: '',
                password: ''
            },
            validate: false,
            messsage: ''
        }
    },
    computed: {
        ...mapState({
            loading: state => state.loading,
            auth: state => state.auth,
            url: state => state.url
        })
    },
    methods: {
        ...mapActions('auth', [
            'login',
        ]),
        onSubmit () {
            onSubmit(this);
        }
    }
}

function onSubmit(model) {
    LoginApi.test();
    if (model.user.email == '' || model.user.password == '') {
        model.validate = true
        model.message = 'Please enter email and password'

        return
    }

    model.login(model.user)
        .then(res => {
            // redirect after login success

            let urlRedirect = window.localStorage.getItem('redirect_url') != null
                ? window.localStorage.getItem('redirect_url')
                : '/dashboard'
            model.$router.push(urlRedirect)

            window.localStorage.removeItem('redirect_url')
            // redirect(model.url.nextUrl)
        }).catch(err => {
        console.log(err)
    })
}